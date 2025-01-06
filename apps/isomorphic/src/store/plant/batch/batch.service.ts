import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { WaterCanBatchData } from '@/api-client/plant/models'
import { WaterCanBatchService } from '@/api-client/PlantApi'



export type WaterCanBatch = WaterCanBatchData['responses']['List']['data'][0]



let timeOut: any

const useWaterCanBatchStore = create(
  combine(
    {
      watercanbatch: {
        id: null as any,
        list: [] as WaterCanBatch[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as WaterCanBatch | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            watercanbatch: { page, size, search, paginate }
          } = get()

          toast.promise(WaterCanBatchService.list({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                watercanbatch: {
                  ...prev.watercanbatch,
                  list: res.data,
                  total: res?.meta?.total
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
          paginate
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
        }) => {
          set(prev => ({ watercanbatch: { ...prev.watercanbatch, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              watercanbatch: {
                ...prev.watercanbatch,
                page: page || prev.watercanbatch.page,
                size: size || prev.watercanbatch.size,
                search: search || prev.watercanbatch.search,
                paginate: paginate ?? true
              }
            }))
            useWaterCanBatchStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ watercanbatch: { ...prev.watercanbatch, search: search } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: WaterCanBatch, isUser?: boolean) => {
          set(prev => ({
            ...prev,
            watercanbatch: {
              ...prev.watercanbatch,
              detail: data,
              id: data?._id,
              isUser: !!isUser
            }
          }))
        }
      },
      select: (id: any) => set(prev => ({ watercanbatch: { ...prev.watercanbatch, id: id } })),
      add: async (bodyData: WaterCanBatchData['payloads']['Create']['requestBody']) => {
        let id = get().watercanbatch.id
        let isUser = get().watercanbatch.isUser

        toast.promise(
          WaterCanBatchService.create({
            requestBody: bodyData,
          }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useWaterCanBatchStore.getState().get.paginate({})
              useWaterCanBatchStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useWaterCanBatchStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().watercanbatch.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(WaterCanBatchService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useWaterCanBatchStore.getState().get.paginate({})
            useWaterCanBatchStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useWaterCanBatchStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useWaterCanBatchStore
