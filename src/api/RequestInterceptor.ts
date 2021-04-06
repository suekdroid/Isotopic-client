import  { client } from './HttpClient'

function setupRequestInterceptor(): void{
    client.interceptors.request.use(function(config){
        const usernameFromLocalStore = localStorage.getItem('username')
        if(usernameFromLocalStore){
            config.headers.Authorization = usernameFromLocalStore
        } else {
            console.log('__Unable to set username in authentication header as no cookie was found')
        }
        return config
    }, function(error){
        return Promise.reject(error)
    })

}

export { setupRequestInterceptor }
