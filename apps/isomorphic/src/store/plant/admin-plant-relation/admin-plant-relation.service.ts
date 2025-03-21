import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { AdminWarehouseRelationData } from '@/api-client/plant/models'
import { AdminWarehouseRelationService } from '@/api-client/PlantApi'
import useAdminStore from '../admins/admins.service'



export type AdminWarehouseRelation = AdminWarehouseRelationData['responses']['List']['data'][0]



let timeOut: any

const useWarehouseRelationStore = create(
  combine(
    {
      example: {
        admin: null as any,
        id: null as any,
        list: [] as AdminWarehouseRelation[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as AdminWarehouseRelation | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate, admin }
          } = get()

          toast.promise(AdminWarehouseRelationService.list({
            query: {
              page: page as any,
              size: size as any,
              admin: admin as any,
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
          admin,
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          admin: string
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
                admin: admin,
              }
            }))
            useWarehouseRelationStore.getState().get.list()
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
        detail: async (id?: string, data?: AdminWarehouseRelation, isUser?: boolean) => {
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
      add: async (bodyData: AdminWarehouseRelationData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let admin = get().example.admin
        let isUser = get().example.isUser

        toast.promise(
          AdminWarehouseRelationService.create({
            requestBody: bodyData,
          }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useAdminStore.getState().get.paginate({})
              useWarehouseRelationStore.getState().get.paginate({ admin: admin })
              useWarehouseRelationStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useWarehouseRelationStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id
        let admin = get().example.admin

        if (!id) return toast.error('No plan to delete')

        toast.promise(AdminWarehouseRelationService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useWarehouseRelationStore.getState().get.paginate({ admin: admin })
            useWarehouseRelationStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useWarehouseRelationStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useWarehouseRelationStore
