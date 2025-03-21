import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { OrderStoreCansData } from '@/api-client/plant/models'
import { OrderStoreCansService } from '@/api-client/PlantApi'



export type Order = OrderStoreCansData['responses']['List']['data'][0]



let timeOut: any

const useOrderStoreScansOutStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Order[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Order | undefined,
        isUser: false as boolean,
        type: "OUT" as string,
        ordreId: null as string | null,
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate, type, ordreId }
          } = get()

          toast.promise(OrderStoreCansService.list({
            query: {
              page: page as any,
              size: size as any,
              type: type,
              ...(ordreId && { order: ordreId })
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
          type,
          orderId,
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          type?: string,
          orderId?: string,
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
                type: type ?? prev.example.type,
                ordreId: orderId ?? prev.example.ordreId,
              }
            }))
            useOrderStoreScansOutStore.getState().get.list()
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
        detail: async (id?: string, data?: Order, isUser?: boolean) => {
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
      setOrderId: (orderId: string) => set(prev => ({ example: { ...prev.example, ordreId: orderId } })),
    })
  )
)

export default useOrderStoreScansOutStore
