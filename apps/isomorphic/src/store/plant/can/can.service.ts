import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { WaterCanData } from '@/api-client/plant/models'
import { WaterCanService } from '@/api-client/PlantApi'



export type WaterCan = WaterCanData['responses']['List']['data'][0]


export const watercanStatuses = [
  "EMPTY", "AT PLANT", "SCANNED OUT FOR WAREHOUSE", "ON THE WAY TO WAREHOUSE", "SCANNED IN TO WAREHOUSE", "AT WAREHOUSE", "SCANNED OUT FOR STORE", "ON THE WAY TO STORE", "SCANNED IN TO STORE", "SCANNED OUT FOR PLANT", "ON THE WAY TO PLANT", "SCANNED OUT FOR RETURN", "OUT FOR RETURN", "AT STORE", "DELIVERED", "INACTIVE", "DAMAGED", "DECOMMISSIONED",
];


let timeOut: any

const useWaterCanStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as WaterCan[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as WaterCan | undefined,
        isUser: false as boolean,
        batches: "" as string,
        watercans: "" as string,
        selectedList: [] as WaterCan[],
        timeOut: null as any,
        statuses: null as string | null,
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate, batches, watercans, statuses }
          } = get()

          toast.promise(WaterCanService.list({
            query: {
              page: page as any,
              size: size as any,
              ...(batches && { batches: batches }),
              ...(watercans && { watercans: watercans }),
              ...(statuses && { statuses: statuses }),
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                example: {
                  ...prev.example,
                  list: res.data,
                  total: res?.meta?.total,
                  pages: res?.meta?.pages,
                }
              }))
              return res?.message || 'fetched'
            },
            error: err => {
              return ""
              // return err
            }
          }, {
            id: "api-toast"
          })
        },
        paginate: ({
          page,
          size,
          search,
          paginate,
          batches,
          watercans,
          statuses
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          batches?: string
          watercans?: string
          statuses?: string
        }) => {
          set(prev => ({ example: { ...prev.example, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              example: {
                ...prev.example,
                page: page ?? prev.example.page,
                size: size || prev.example.size,
                search: search || prev.example.search,
                paginate: paginate ?? true,
                batches: batches ?? prev.example.batches,
                watercans: watercans ?? prev.example.watercans,
                statuses: statuses ?? ""
              }
            }))
            useWaterCanStore.getState().get.list()
          }

          if (search || watercans) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ example: { ...prev.example, ...(search && { search: search }), ...(watercans && { watercans: watercans }) } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: WaterCan, isUser?: boolean) => {
          set(prev => ({
            ...prev,
            example: {
              ...prev.example,
              detail: data,
              id: data?._id,
              isUser: !!isUser
            }
          }))
        }
      },
      select: (id: any) => set(prev => ({ example: { ...prev.example, id: id } })),
      rowSelect: (id: any) => set(prev => ({ example: { ...prev.example, selectedList: prev.example.selectedList.find(f => f._id == id) ? prev.example.selectedList.filter(f => f._id != id) : [...prev.example.selectedList, prev.example.list.find(f => f._id == id) as any] } })),
      rowSelectAll: (checked: boolean) => {
        const { example: { list } } = get();

        for (let item of list) {
          set(prev => ({ example: { ...prev.example, selectedList: checked ? prev.example.selectedList.find(f => f._id == item._id) ? prev.example.selectedList : [...prev.example.selectedList, prev.example.list.find(f => f._id == item._id) as any] : prev.example.selectedList.filter(f => f._id != item._id) } }))
        }
      },
      add: async (bodyData: WaterCanData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? WaterCanService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : WaterCanService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useWaterCanStore.getState().get.paginate({})
              useWaterCanStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useWaterCanStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')


      }
    })
  )
)

export default useWaterCanStore
