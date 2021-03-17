import './App.css';
import { NotePage } from './routes/NotePage';
import { LoginPage } from './routes/LoginPage';
import React, { useState } from 'react';
import { NotificationUIController } from './components/ui/NotificationUIController';
import { Navbar } from './components/navigation/Navbar';

const defaultAuthState = { username: '', authenticated: false };
const UserContext = React.createContext(defaultAuthState);

function App(): JSX.Element {
    const [authState, updateAuthState] = useState({
        username: '',
        authenticated: false,
    });

    const handleSignIn = (username: string) => {
        updateAuthState({ username: username, authenticated: true });
        console.log('signing in user with username', username);
    };

    return (
        <div className="App">
            <Navbar />
            {authState.authenticated ? (
                <UserContext.Provider value={authState}>
                    <NotePage />
                </UserContext.Provider>
            ) : (
                <LoginPage signIn={handleSignIn} />
            )}
            <NotificationUIController />
        </div>
    );
}
export { UserContext };
export default App;
