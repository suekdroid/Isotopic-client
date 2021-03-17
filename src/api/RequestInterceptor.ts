import  { client } from './HttpClient'

function setupRequestInterceptor(): void{
    client.interceptors.request.use(function(config){
        return config
    }, function(error){
        return Promise.reject(error)
    })

}

export { setupRequestInterceptor }