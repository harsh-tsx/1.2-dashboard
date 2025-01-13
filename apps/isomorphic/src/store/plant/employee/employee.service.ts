import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { EmployeeData } from '@/api-client/plant/models'
import { EmployeeService } from '@/api-client/PlantApi'



export type Employee = EmployeeData['responses']['List']['data'][0]



let timeOut: any

const useEmployeeStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Employee[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Employee | undefined,
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

          toast.promise(EmployeeService.list({
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
            useEmployeeStore.getState().get.list()
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
        detail: async (id?: string, data?: Employee, isUser?: boolean) => {
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
      add: async (bodyData: EmployeeData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? EmployeeService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : EmployeeService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useEmployeeStore.getState().get.paginate({})
              useEmployeeStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useEmployeeStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(EmployeeService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useEmployeeStore.getState().get.paginate({})
            useEmployeeStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useEmployeeStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useEmployeeStore
