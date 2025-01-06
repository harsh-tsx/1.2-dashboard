import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { PlantData } from '@/api-client/plant/models'
import { PlantService } from '@/api-client/PlantApi'



export type Plant = PlantData['responses']['List']['data'][0]



let timeOut: any

const usePlantStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Plant[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Plant | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate }
          } = get()

          toast.promise(PlantService.list({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                example: {
                  ...prev.example,
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
          set(prev => ({ example: { ...prev.example, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              example: {
                ...prev.example,
                page: page || prev.example.page,
                size: size || prev.example.size,
                search: search || prev.example.search,
                paginate: paginate ?? true
              }
            }))
            usePlantStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ example: { ...prev.example, search: search } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: Plant, isUser?: boolean) => {
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
      add: async (bodyData: PlantData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? PlantService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : PlantService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              usePlantStore.getState().get.paginate({})
              usePlantStore.getState().select(null)
              return res?.message
            },
            error: err => {
              usePlantStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(PlantService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            usePlantStore.getState().get.paginate({})
            usePlantStore.getState().select(null)
            return res?.message
          },
          error: err => {
            usePlantStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default usePlantStore
