import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { StoreComplaintData } from '@/api-client/plant/models'
import { StoreComplaintService } from '@/api-client/PlantApi'



export type Complaint = StoreComplaintData['responses']['List']['data'][0]



let timeOut: any

const useComplaintStore = create(
  combine(
    {
      example: {
        id: null as any,
        list: [] as Complaint[],
        total: 0,
        page: 0,
        pages: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Complaint | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        list: async ({ stores = "" }: { stores?: string } = {}) => {
          const {
            example: { page, size, search, paginate }
          } = get()

          toast.promise(StoreComplaintService.list({
            query: {
              page: page as any,
              size: size as any,
              ...(stores && { stores: stores }),
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
          stores,
        }: {
          page?: number
          size?: number
          search?: string
          paginate?: boolean
          stores?: string
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
              }
            }))
            useComplaintStore.getState().get.list({ ...(stores && { stores: stores }) })
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
        detail: async (id?: string, data?: Complaint, isUser?: boolean) => {
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
      update: async (bodyData: StoreComplaintData['payloads']['Update']['requestBody']) => {
        let id = get().example.id

        return await toast.promise(
          StoreComplaintService.update({
            query: {
              id: id,
            },
            requestBody: bodyData as any,
          }),
          {
            loading: id ? 'Updating' : 'Adding',
            success: res => {
              useComplaintStore.getState().get.paginate({})
              return res?.message
            },
            error: err => {
              return err
            }
          }
        )
      },
    })
  )
)

export default useComplaintStore
