import { ApiError } from 'next/dist/server/api-utils'
import { OpenAPI } from './plant/core/OpenAPI'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options'

OpenAPI.BASE = (process.env.NEXT_PUBLIC_API_BASE_URL as string)

// if (OpenAPI.BASE.includes("localhost")) {
//   OpenAPI.BASE = OpenAPI.BASE.replace('/admin', '')
// } else {
//   OpenAPI.BASE = OpenAPI.BASE.replace('m/admin', 'm')
// }

OpenAPI.TOKEN = async () => {
    console.log("retrieving token")
    console.log("typeof window != undefined ", typeof window != undefined)
    console.log("Object.keys(window).length ", Object.keys(window).length)

    if (typeof window != undefined && Object.keys(window).length) {
        return localStorage.getItem('accessToken') as any
    }
    return ""
}

OpenAPI.interceptors.request.use((...req) => {
    // console.log("🚀 ~ OpenAPI.interceptors.request.use ~ req:", req)
    return req[0];
})

OpenAPI.interceptors.response.use((req) => {

    console.log('🚀 ~ OpenAPI.interceptors.response.use ~ req:', req.config)
    console.log('🚀 ~ OpenAPI.interceptors.response.use ~ req:', req.data)
    if (req.status == 422) {
        req.statusText = req.data?.message
        throw new ApiError(req.status, req.data?.message)
    }

    if (req.status == 401) {
        console.log("leaving exiting the page")
        // window.localStorage.clear();
        setTimeout(() => {
            // window.location.reload();

        }, 500)

    }

    return req
})

export { ApiError } from './plant/core/ApiError'
export type { ApiResult } from './plant/core/ApiResult'
export { CancelablePromise, CancelError } from './plant/core/CancelablePromise'
export { OpenAPI, type OpenAPIConfig } from './plant/core/OpenAPI'
export * as PlantApi from './plant';
export * from './plant/services'

