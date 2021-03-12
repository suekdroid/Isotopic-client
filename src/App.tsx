import './App.css';
import { NotePage } from './routes/NotePage'
import { LoginPage } from './routes/LoginPage'
import { useState } from 'react';
import { Notification } from './components/ui/Notification'

interface Props {
  message: string
  type: string
}

//Wrap in user context state
function App() {
  //REDUX USERSTATE
  const [userState, updateUserState] = useState({username: '', authenticated: false})
  const handleSignIn = ({ username } : {username: string}) => {
    updateUserState({username:username,authenticated:true})
    showMessage({message: 'Signed in', type: 'success'})
  }
  const handleSignOut = () => updateUserState({username:'', authenticated: false})
  
  //Extract to custom hook?
  const [message, updateMessage] = useState({message:'', type:'info'})
  const showMessage = ({message, type}: Props) => {
    clearMessage()
    updateMessage({message: message, type: type})
    setTimeout(()=>{clearMessage()}, 3000)
  }
  const clearMessage = () => updateMessage({message:'', type:'info'})

  return (
    <div className="App">
      {(userState.authenticated) ? <NotePage signOut={handleSignOut}/> : <LoginPage signIn={handleSignIn} messageCallback={showMessage}/>}
      {message.message && <Notification message={message.message} type={message.type} dismissNotification={clearMessage}/>}
    </div>
  );
}

export default App;
