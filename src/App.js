import './App.css';
import { NotePage } from './components/notes/NotePage'
import { LoginPage } from './components/authentication/CredentialsController'
import { useState } from 'react';
import { Notification } from './components/Util/Notification'

//Wrap in user context state
function App() {
  const [userState, updateUserState] = useState({username: '', authenticated: false})
  const handleSignIn = (username) => updateUserState({username:username,authenticated:true})
  const handleSignOut = () => updateUserState({username:'', authenticated: false})
  
  const [message, updateMessage] = useState({message:'', type:'info'})
  const showMessage = ({message, type}) => {
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
