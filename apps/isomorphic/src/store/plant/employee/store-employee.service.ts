import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { StoreEmployeeData } from '@/api-client/plant/models'
import { StoreEmployeeService } from '@/api-client/PlantApi'



export type StoreEmployee = StoreEmployeeData['responses']['List']['data'][0]



let timeOut: any

const useStoreEmployeeStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as StoreEmployee[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as StoreEmployee | undefined,
        isUser: false as boolean,
        stores: null as string | null
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate, stores }
          } = get()

          toast.promise(StoreEmployeeService.list({
            query: {
              page: page as any,
              size: size as any,
              ...(stores && { store: stores })
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
          stores
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          stores?: string
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
                stores: stores ?? prev.example.stores,
              }
            }))
            useStoreEmployeeStore.getState().get.list()
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
        detail: async (id?: string, data?: StoreEmployee, isUser?: boolean) => {
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
      add: async (bodyData: StoreEmployeeData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? StoreEmployeeService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : StoreEmployeeService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useStoreEmployeeStore.getState().get.paginate({})
              useStoreEmployeeStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useStoreEmployeeStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(StoreEmployeeService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useStoreEmployeeStore.getState().get.paginate({})
            useStoreEmployeeStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useStoreEmployeeStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useStoreEmployeeStore
