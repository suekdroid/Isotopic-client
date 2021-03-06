import ArrowBack from '@material-ui/icons/ArrowBack';
import { useState } from "react"
import { Link } from 'react-router-dom';
import { btnIconText, flexColumn, flexRow, pageWrapper } from "../../style/SharedStyles"
import { inputvalidator } from '../../validation/inputvalidator';
import { TextInput } from '../shared/input/TextInput';

function CreateAccount(props){
    const [userCredentials, updateCredentials] = useState({ username: '', password: '', email:'', type:'CREATEACCOUNT' })

    const [uiErrors, updateUIErrors] = useState(new Map())

    const submitCredentials = (e) => {
        e.preventDefault()
        if(isInputValid()) {
            console.log('Create account API not implemented.');
        } else {console.log('ui error');}
    }

    const isInputValid = () => {
        clearUIErrors()
        const username = userCredentials.username
        const password = userCredentials.password
        const email = userCredentials.email
        const validationErrors = inputvalidator({username, password, email})
        if(validationErrors.size > 0){
            updateUIErrors(new Map([...validationErrors]))
            return false
        } else {
            return true
        }
    }

    const clearUIErrors = () => updateUIErrors((prev)=> new Map(prev.clear()))

    return (
        <div style={ pageWrapper }>
            <form
                action="submit"
                onSubmit={submitCredentials}
                className="card" 
                style={{...flexColumn, ...{padding: '60px 60px 80px 60px'}}}>

                <Link to='' className="basicLink">
                    <button 
                        style={ btnIconText }>
                            <ArrowBack/><h3>Create account</h3>
                    </button>
                </Link>

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

                <TextInput
                    inputType="email"
                    label="Email"
                    value={userCredentials.email}
                    updateInput={(data)=>updateCredentials({...userCredentials, email:data})}
                    validationError={uiErrors.get('email')}
                    placeholder="(optional)"/> 

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