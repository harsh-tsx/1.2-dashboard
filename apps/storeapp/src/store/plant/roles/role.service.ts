import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { StoreRoleData } from '@/api-client/store/models'
import { StoreRoleService } from '@/api-client/PlantApi'



export type Role = StoreRoleData['responses']['List']['data'][0]

export type Abilities = 1 | 2 | 3 | 4

export type Ability = Abilities[]

export interface Permission {
  [game: number | string]: ModulePermission
}

export interface GamePermission {
  [module: number]: ModulePermission
}

export interface ModulePermission {
  ids: Array<number | string>
  ability: Ability
  can?: (mId: number, gIds: number[]) => boolean
  moduleId?: number
  gameIds?: number[]
  read?: boolean
  write?: boolean
  update?: boolean
  del?: boolean
}

let timeOut: any

const useRoleStore = create(
  combine(
    {
      role: {
        id: null as any,
        list: [] as Role[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Role | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            role: { page, size, search, paginate }
          } = get()

          toast.promise(StoreRoleService.list({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                role: {
                  ...prev.role,
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
          set(prev => ({ role: { ...prev.role, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              role: {
                ...prev.role,
                page: page || prev.role.page,
                size: size || prev.role.size,
                search: search || prev.role.search,
                paginate: paginate ?? true
              }
            }))
            useRoleStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ role: { ...prev.role, search: search } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: Role, isUser?: boolean) => {
          set(prev => ({
            ...prev,
            role: {
              ...prev.role,
              detail: data,
              id: data?._id,
              isUser: !!isUser
            }
          }))
        }
      },
      select: (id: any) => set(prev => ({ role: { ...prev.role, id: id } })),
      add: async (bodyData: StoreRoleData['payloads']['Create']['requestBody']) => {
        let id = get().role.id
        let isUser = get().role.isUser

        toast.promise(
          id
            ? StoreRoleService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : StoreRoleService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useRoleStore.getState().get.paginate({})
              useRoleStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useRoleStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().role.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(StoreRoleService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useRoleStore.getState().get.paginate({})
            useRoleStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useRoleStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useRoleStore
