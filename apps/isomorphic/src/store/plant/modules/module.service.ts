import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { ModuleData } from '@/api-client/plant/models'
import { ModuleService } from '@/api-client/PlantApi'



export type Module = ModuleData['responses']['ModuleList']['data'][0]


export interface ModulePermission {
  ids: Array<number | string>
  can?: (mId: number, gIds: number[]) => boolean
  moduleId?: number
  gameIds?: number[]
  read?: boolean
  write?: boolean
  update?: boolean
  del?: boolean
}

let timeOut: any

const useModuleStore = create(
  combine(
    {
      module: {
        id: null as any,
        list: [] as Module[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Module | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            module: { page, size, search, paginate }
          } = get()

          toast.promise(ModuleService.moduleList({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                module: {
                  ...prev.module,
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
          set(prev => ({ module: { ...prev.module, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              module: {
                ...prev.module,
                page: page || prev.module.page,
                size: size || prev.module.size,
                search: search || prev.module.search,
                paginate: paginate ?? true
              }
            }))
            useModuleStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ module: { ...prev.module, search: search } }))
            return
          }
          init()
        },

      },

    })
  )
)

export default useModuleStore
