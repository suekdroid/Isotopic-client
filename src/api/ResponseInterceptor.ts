import { client } from './HttpClient'
import { logApiError } from './ApiErrorHandler'

function setupResponseInterceptor(): void{
    client.interceptors.response.use(function(response){
        return response
    }, function(error){
        logApiError(error)
        return Promise.reject(error)
    })
}

export {
    setupResponseInterceptor
}