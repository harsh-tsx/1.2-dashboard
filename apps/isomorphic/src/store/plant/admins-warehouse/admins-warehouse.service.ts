import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { WareHouseAdminData } from '@/api-client/plant/models'
import { WareHouseAdminService } from '@/api-client/PlantApi'



export type AdminWarehouse = WareHouseAdminData['responses']['AdminList']['data'][0]


let timeOut: any

const useWarehouseAdminStore = create(
  combine(
    {
      admin: {
        id: null as any,
        list: [] as AdminWarehouse[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as AdminWarehouse | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            admin: { page, size, search, paginate }
          } = get()

          toast.promise(WareHouseAdminService.adminList({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                admin: {
                  ...prev.admin,
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
          set(prev => ({ admin: { ...prev.admin, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              admin: {
                ...prev.admin,
                page: page ?? prev.admin.page,
                size: size || prev.admin.size,
                search: search || prev.admin.search,
                paginate: paginate ?? true
              }
            }))
            useWarehouseAdminStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ admin: { ...prev.admin, search: search } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: AdminWarehouse, isUser?: boolean) => {
          set(prev => ({
            ...prev,
            admin: {
              ...prev.admin,
              detail: data,
              id: data?._id,
              isUser: !!isUser
            }
          }))
        }
      },
      select: (id: any) => set(prev => ({ admin: { ...prev.admin, id: id } })),
      add: async (bodyData: WareHouseAdminData['payloads']['AdminCreate']['requestBody']) => {
        let id = get().admin.id
        let isUser = get().admin.isUser

        toast.promise(
          id
            ? WareHouseAdminService.adminUpdate({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : WareHouseAdminService.adminCreate({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useWarehouseAdminStore.getState().get.paginate({})
              useWarehouseAdminStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useWarehouseAdminStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().admin.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(WareHouseAdminService.adminDelete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useWarehouseAdminStore.getState().get.paginate({})
            useWarehouseAdminStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useWarehouseAdminStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useWarehouseAdminStore
