import { client } from './HttpClient'
import { logApiError } from './ApiErrorHandler'

//TODO //Handle unathorized case when error.response === 401

function setupResponseInterceptor(): void{
    client.interceptors.response.use(function(response){
        console.log("__RESPONSE Inside response interceptor__", response)
        return response
    }, function(error){
        console.log("__RESPONSE Inside response interceptor ERROR__")
        logApiError(error)
        return Promise.reject(error)
    })
}

export {
    setupResponseInterceptor
}