import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { WarehouseEmployeeData } from '@/api-client/plant/models'
import { WarehouseEmployeeService } from '@/api-client/PlantApi'



export type WarehouseEmployee = WarehouseEmployeeData['responses']['List']['data'][0]



let timeOut: any

const useWarehouseEmployeeStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as WarehouseEmployee[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as WarehouseEmployee | undefined,
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

          toast.promise(WarehouseEmployeeService.list({
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
            useWarehouseEmployeeStore.getState().get.list()
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
        detail: async (id?: string, data?: WarehouseEmployee, isUser?: boolean) => {
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
      add: async (bodyData: WarehouseEmployeeData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? WarehouseEmployeeService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : WarehouseEmployeeService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useWarehouseEmployeeStore.getState().get.paginate({})
              useWarehouseEmployeeStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useWarehouseEmployeeStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(WarehouseEmployeeService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useWarehouseEmployeeStore.getState().get.paginate({})
            useWarehouseEmployeeStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useWarehouseEmployeeStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useWarehouseEmployeeStore
