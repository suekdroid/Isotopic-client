import ArrowBack from '@material-ui/icons/ArrowBack';
import { useState } from "react"
import { flexColumn, flexRow, pageWrapper } from "../../style/SharedStyles"

function CreateAccount(props){
    const [userCredentials, updateCredentials] = useState({ username: '', password: '', email:'', type:'CREATEACCOUNT' })

    const submitCredentials = (e) => {
        e.preventDefault()
        const validationError = validateUserInput()
        if(validationError) {
            props.messageCallback(validationError)
        } else {
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

    const navigateBack = (e) => {
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

                <div style={ flexRow }>
                    <button className="btnIcon" onClick={navigateBack}><ArrowBack/></button>
                    <h2>Create account</h2>
                </div>

                <input 
                    value={userCredentials.username}
                    onChange={(e)=>updateCredentials({...userCredentials, username:e.target.value})}
                    required
                    type="username" 
                    placeholder="Username"/>

                <input 
                    value={userCredentials.email}
                    onChange={(e)=>updateCredentials({...userCredentials, email:e.target.value})}
                    type="email" 
                    placeholder="Email (optional)"
                    />

                <input 
                    value={userCredentials.password}
                    onChange={(e)=>updateCredentials({...userCredentials, password:e.target.value})}
                    required
                    type="password" 
                    placeholder="Password"/>

                <div style={ flexRow }>
                    <input type="checkbox" required/><label>I accept terms and conditions</label>
                </div>

                <button type="submit">
                    Sign up
                </button>
                
            </form>
        </div>
    )
}
export { CreateAccount }