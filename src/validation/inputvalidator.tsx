interface InputTypes {
    username:string,
    password:string,
    email:string
}

function inputvalidator({username, password, email}: InputTypes){
    const errorMap = new Map<string,string>()
    if(username){
        if(username.length<5){errorMap.set('username', 'Username minimum 5 characters.')}
    }
    if(password){
        if(password.length<8){errorMap.set('password', 'Password minimum 8 characters.')}
    }
    if(email){
        //disabled due to irrelevant escapement warnings
        //eslint-disable-next-line
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if(!emailRegex.test(email)){errorMap.set('email', 'Email must be valid.')}
    }
    return errorMap
}
export { inputvalidator }