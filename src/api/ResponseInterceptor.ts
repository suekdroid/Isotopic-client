import { client } from './HttpClient'
import { logApiError } from './ApiErrorHandler'

function setupResponseInterceptor(){
    client.interceptors.response.use(function(response){
        console.log("__RESPONSE Inside response interceptor__", response)
        return response
    }, function(error){
        logApiError(error)
        if(error.response){
            //Handle unathorized case
        }
        return Promise.reject(error)
    })
}

export {
    setupResponseInterceptor
}