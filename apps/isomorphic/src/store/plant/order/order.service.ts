import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { OrderData } from '@/api-client/plant/models'
import { OrderService } from '@/api-client/PlantApi'
import moment from 'moment'



export type Order = OrderData['responses']['List']['data'][0]



let timeOut: any

const useOrderStore = create(
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
        date_from: moment().subtract(2, 'days').toDate() as Date,
        date_to: moment().add(7, "days").toDate() as Date,
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async () => {
          const {
            example: { page, size, search, paginate, date_from, date_to }
          } = get()
          console.log("date_from: ", date_from)
          console.log("date_to: ", date_to)

          toast.promise(OrderService.list({
            query: {
              page: page as any,
              size: size as any,
              ...((date_from && date_to) && { dateFrom: date_from.toDateString(), dateTo: date_to.toDateString() })
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
          date_from,
          date_to,
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          date_from?: Date
          date_to?: Date
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
                date_from: date_from ?? prev.example.date_from,
                date_to: date_to ?? prev.example.date_to,
              }
            }))
            useOrderStore.getState().get.list()
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
      add: async (bodyData: OrderData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? OrderService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : OrderService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useOrderStore.getState().get.paginate({})
              useOrderStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useOrderStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(OrderService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useOrderStore.getState().get.paginate({})
            useOrderStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useOrderStore.getState().select(null)
            return err
          }
        })
      },
    })
  )
)

export default useOrderStore
