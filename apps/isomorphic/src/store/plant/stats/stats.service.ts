import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import toast from 'react-hot-toast'
import { StatsData } from '@/api-client/plant/models'
import { StatsService } from '@/api-client/PlantApi'



export type Stats = StatsData['responses']['Stats']['data']


let timeOut: any

const useStatsStore = create(
  combine(
    {
      stats: {
        id: null as any,
        list: [] as Stats[],
        total: 0,
        page: 0,
        size: 10,
        search: null as string | null,
        paginate: true as boolean,
        detail: undefined as Stats | undefined,
        isUser: false as boolean
        // timeOut: null as any
      }
    },
    (set, get) => ({
      get: {
        stats: async () => {

          toast.promise(StatsService.stats(), {
            loading: 'fetching...',
            success: res => {
              console.log('res: ', res)
              set(prev => ({
                stats: {
                  ...prev.stats,
                  detail: res.data,
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

      }
    })
  )
)

export default useStatsStore
