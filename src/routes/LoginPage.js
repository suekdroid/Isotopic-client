import { useState } from 'react'
import { Login } from '../components/authentication/Login'
import { CreateAccount } from '../components/authentication/CreateAccount'

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
    
    return (
        <div>
            {(UIState.mode === UI_MODES.LOGIN) ? 
            <Login 
                onNavigate={setUIState} 
                messageCallback={propagateCallback}/> : 
            <CreateAccount 
                onNavigate={setUIState}  
                messageCallback={propagateCallback}/>}
        </div>
    )
}

export { LoginPage }