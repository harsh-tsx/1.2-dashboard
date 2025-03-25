import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { ForecastData } from '@/api-client/plant/models'
import { ForecastService } from '@/api-client/PlantApi'
import moment from 'moment'



export type Forecast = ForecastData['responses']['List']['data'][0]



let timeOut: any

const useForecastStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Forecast[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Forecast | undefined,
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

          toast.promise(ForecastService.list({
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
            useForecastStore.getState().get.list()
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
        detail: async (id?: string, data?: Forecast, isUser?: boolean) => {
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
      add: async (bodyData: ForecastData['payloads']['Create']['requestBody']) => {
        let id = get().example.id
        let isUser = get().example.isUser

        toast.promise(
          id
            ? ForecastService.update({
              query: {
                id: id,
              },
              requestBody: bodyData as any,
            }) : ForecastService.create({
              requestBody: bodyData,
            }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useForecastStore.getState().get.paginate({})
              useForecastStore.getState().select(null)
              return res?.message
            },
            error: err => {
              useForecastStore.getState().select(null)
              return err
            }
          }
        )
      },
      delete: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(ForecastService.delete({ query: { id: id } }), {
          loading: 'deleting',
          success: res => {
            useForecastStore.getState().get.paginate({})
            useForecastStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useForecastStore.getState().select(null)
            return err
          }
        })
      },
      order: async () => {
        let id = get().example.id

        if (!id) return toast.error('No plan to delete')

        toast.promise(ForecastService.createOrder({ query: { id: id } }), {
          loading: 'creating order',
          success: res => {
            useForecastStore.getState().get.paginate({})
            useForecastStore.getState().select(null)
            return res?.message
          },
          error: err => {
            useForecastStore.getState().select(null)
            return err
          }
        })
      }
    })
  )
)

export default useForecastStore
