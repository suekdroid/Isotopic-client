import { useState } from "react"
import { flexColumn, flexRow, pageWrapper, btnText } from "../../style/SharedStyles"
import { inputvalidator } from '../../validation/inputvalidator'
import { TextInput } from '../ui/TextInput'

function Login(props){

    const [userCredentials, updateCredentials] = useState({ username: '', password: '', rememberSignIn: false, type: 'LOGIN' })

    const [uiErrors, updateUIErrors] = useState(new Map())

    const submitCredentials = (e) => {
        e.preventDefault()
        if(isInputValid()) {
            props.onSubmitCredentials(userCredentials)
        } else {
            console.log('ui error');
        }
    }

    const isInputValid = () => {
        clearUIErrors()
        const username = userCredentials.username
        const password = userCredentials.password
        const validationErrors = inputvalidator({username, password})
        if(validationErrors.size > 0){
            updateUIErrors(new Map([...validationErrors]))
            return false
        } else { return true }
    }

    const clearUIErrors = () => updateUIErrors((prev)=> new Map(prev.clear()))

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
                style={{...flexColumn, ...{padding: '60px 60px 80px 60px'}}}>

                <h2>Login</h2>

                <TextInput
                    inputType="text"
                    label="Username"
                    value={userCredentials.username}
                    updateInput={(data)=>updateCredentials({...userCredentials, username:data})}
                    validationError={uiErrors.get('username')}/>

                <TextInput
                    inputType="password"
                    label="Password"
                    value={userCredentials.password}
                    updateInput={(data)=>updateCredentials({...userCredentials, password:data})}
                    validationError={uiErrors.get('password')}/>    

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