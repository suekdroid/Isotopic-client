import './App.css';
import { NotePage } from './routes/NotePage'
import { LoginPage } from './routes/LoginPage'
import { useState } from 'react';
import { NotificationUIController } from './components/ui/NotificationUIController';


function App() {
  //REDUX USERSTATE
  const [userState, updateUserState] = useState({username: '', authenticated: false})
  const handleSignIn = ({ username } : {username: string}) => {
    updateUserState({username:username,authenticated:true})
  }
  const handleSignOut = () => updateUserState({username:'', authenticated: false})

  //Global notifications are extracted to a separate notification controller 
  return (
    <div className="App">
      {(userState.authenticated) ? <NotePage signOut={handleSignOut}/> : <LoginPage signIn={handleSignIn}/>}
      <NotificationUIController /> 
    </div>
  );
}

//Global state
// User context
// Global event messages 

//Store (object with redux application state!)
//action - dispatch - runs reducer function - new state - notify substribers 
//state - storing the data
//reducer: takes current state and an action object 
//we can add an initial state 
//switch on action.type

//actions: has a type; string representation of the action to be performed 
//    Additional description can be delivered in a payload object 
//state is immutable: we can 'update' it by taking a copy, adding to the copy and returning the new copy 

//we pass the reducer function to our Redux.createStore(reducer) function 
//the store uses the reducer function to calculate the intial state and perform calculate updates!

// Rules; 
//    should only update state based on state and action arguments
//    must not update existing state; copy, change and return new state
//    must not do async work

// we can use store.getState() to retrieve the state from the store 

//by store.subscribe(cb) we can pass a callbackfunction reference to the store. This function will be called whenever a value in the store uådates 

//store.dispatch(action) -> reducer runs -> calculates the new state -> notify subscribers,
//e.g. store.dispatch({ type: 'counter/incremented' })

//Selectors: functions that can extract store state values 

// React; useSelector and useDispatch

export default App;
