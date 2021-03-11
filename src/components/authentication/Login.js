import { useState } from "react"
import { flexColumn, flexRow, pageWrapper, btnText } from "../../style/SharedStyles"

function Login(props){

    const [userCredentials, updateCredentials] = useState({ username: '', password: '', rememberSignIn: false, type: 'LOGIN' })

    const submitCredentials = (e) => {
        e.preventDefault()
        const validationError = validateUserInput()
        if(validationError) {
            props.messageCallback(validationError)
        } else {
            console.log('Submitting credentials');
            props.onSubmitCredentials(userCredentials)
        }
    }

    const validateUserInput = () => {
        let validationError = {message:'', type:'warning'}
        if(!userCredentials.username.includes('#')){
            validationError.message = 'Some UI warning'
        } else if(userCredentials.password.length<=5){
            validationError.message = 'Password must be more than 5 characters'
        }
        return (validationError.message) ? validationError : null
    }

    const navigateToSignUp = (e) => {
        e.preventDefault()
        props.onNavigate()
    }

    return (
        <div style={ pageWrapper }>
            <form
                action="submit"
                onSubmit={submitCredentials}
                className="card" 
                style={{...flexColumn}}>

                <h2>
                    Login
                </h2>

                <input 
                    value={userCredentials.username}
                    onChange={(e)=>updateCredentials({...userCredentials, username:e.target.value})}
                    required
                    type="username" 
                    placeholder="Username"/>

                <input 
                    value={userCredentials.password}
                    onChange={(e)=>updateCredentials({...userCredentials, password:e.target.value})}
                    required
                    type="password" 
                    placeholder="Password"
                    autoComplete="current-password"
                    />

                <div style={ flexRow }>
                    <input 
                        type="checkbox" 
                        value={userCredentials.rememberSignIn}
                        onChange={(e)=>updateCredentials({...userCredentials, rememberSignIn:e.target.checked})}
                        /><label>Remember me</label>
                </div>

                <button type="submit">
                    Sign in
                </button>
                <div style={ flexRow }>
                <p>Don't have an account?</p><button style={ btnText } onClick={navigateToSignUp}>Sign up</button>
                </div>
                
            </form>
            
        </div>
    )

}

export { Login }