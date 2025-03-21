import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { DriverData } from '@/api-client/plant/models'
import { DriverService } from '@/api-client/PlantApi'



export type Driver = DriverData['responses']['List']['data'][0]



let timeOut: any

const useDriverStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Driver[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Driver | undefined,
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

          toast.promise(DriverService.list({
            query: {
              page: page as any,
              size: size as any,
              ...(search && { search: search }),
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
                page: page ?? prev.example.page,
                size: size || prev.example.size,
                search: search || prev.example.search,
                paginate: paginate ?? true
              }
            }))
            useDriverStore.getState().get.list()
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
        detail: async (id?: string, data?: Driver, isUser?: boolean) => {
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
      add: async (bodyData: DriverData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? DriverService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : DriverService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useDriverStore.getState().get.paginate({})
              useDriverStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useDriverStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(DriverService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useDriverStore.getState().get.paginate({})
            useDriverStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useDriverStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useDriverStore
