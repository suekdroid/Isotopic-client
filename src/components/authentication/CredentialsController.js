import { useState } from 'react'
import { Login } from './Login'
import { CreateAccount } from './CreateAccount'

const UI_MODES = {
    LOGIN: 'MODE_LOGIN', 
    SIGNUP: 'MODE_SIGNUP'
}

function LoginPage(props) {
    
    const [UIState, updateUIState] = useState({mode: UI_MODES.LOGIN})

    const setUIState = () => {
        switch(UIState.mode){
            case UI_MODES.LOGIN:
                updateUIState({mode:UI_MODES.SIGNUP})
                break
            case UI_MODES.SIGNUP:
                updateUIState({mode:UI_MODES.LOGIN})
                break
            default: 
                updateUIState({mode:UI_MODES.LOGIN})
        }   
    }

    const propagateCallback = (data) => {
        props.messageCallback(data)
    }

    const handleSubmit = (userCredentials) => {
        props.messageCallback({message:'Signing in', type:'loading'})
    }
    
    return (
        <div>
            {(UIState.mode === UI_MODES.LOGIN) ? 
            <Login 
                onNavigate={setUIState} 
                onSubmitCredentials={handleSubmit}
                messageCallback={propagateCallback}/> : 
            <CreateAccount 
                onNavigate={setUIState}  
                onSubmitCredentials={handleSubmit}
                messageCallback={propagateCallback}/>}
        </div>
    )
}

export { LoginPage }