const ERRORTYPE_RESPONSE = 'API_RESPONSE_ERROR'
const ERRORTYPE_REQUEST = 'API_REQUEST_ERROR'
const ERRORTYPE_APPLICATION_ERROR = 'API_APPLICATION_ERROR'

//Logging of API errors
function logApiError(error:any): void{
    if(error.response){     
        console.log(
            ERRORTYPE_RESPONSE, 
            '[data, status, headers]', 
            error.response.data, 
            error.response.status, 
            error.response.headers
        )
    } else if (error.request){
        console.log(ERRORTYPE_REQUEST, error.request)
    } else {
        console.log(ERRORTYPE_APPLICATION_ERROR, error)
    }
    console.log('REQUEST_CONFIGURATION', error.config)
}

//Returns a presentable text for the UI
function getApiErrorDisplayText(error:any): string{
    let errorDisplayText = "An unknown error occurred"
    if(error.response){      
        errorDisplayText = error.response.data.message
    } else if (error.request){
        errorDisplayText = "Request failed. Did you check your internet connection?"
    } else {
        errorDisplayText = "The request failed"
    }
    return errorDisplayText
}
export {
    logApiError, 
    getApiErrorDisplayText
}