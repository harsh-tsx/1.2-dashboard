import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { StoreData } from '@/api-client/plant/models'
import { StoreService } from '@/api-client/PlantApi'



export type Store = StoreData['responses']['List']['data'][0]



let timeOut: any

const useStoreStore = create(
  combine(
    {
      store: {
        id: null as any,
        list: [] as Store[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Store | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            store: { page, size, search, paginate }
          } = get()

          toast.promise(StoreService.list({
            query: {
              page: page as any,
              size: size as any,
            }
          }), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                store: {
                  ...prev.store,
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
          set(prev => ({ store: { ...prev.store, search: search || '' } }))

          clearTimeout(timeOut)

          const init = () => {
            set(prev => ({
              store: {
                ...prev.store,
                page: page || prev.store.page,
                size: size || prev.store.size,
                search: search || prev.store.search,
                paginate: paginate ?? true
              }
            }))
            useStoreStore.getState().get.list()
          }

          if (search) {
            timeOut = setTimeout(() => {
              init()
            }, 1000)
            set(prev => ({ store: { ...prev.store, search: search } }))
            return
          }
          init()
        },
        detail: async (id?: string, data?: Store, isUser?: boolean) => {
          set(prev => ({
            ...prev,
            store: {
              ...prev.store,
              detail: data,
              id: data?._id,
              isUser: !!isUser
            }
          }))
        }
      },
      select: (id: any) => set(prev => ({ store: { ...prev.store, id: id } })),
      add: async (bodyData: StoreData['payloads']['Create']['requestBody']) => {
        let id = get().store.id
        let isUser = get().store.isUser

        toast.promise(
          id
            ? StoreService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : StoreService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useStoreStore.getState().get.paginate({})
              useStoreStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useStoreStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().store.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(StoreService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useStoreStore.getState().get.paginate({})
            useStoreStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useStoreStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useStoreStore
