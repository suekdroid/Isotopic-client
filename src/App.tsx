import { LoginPage } from './ui/authentication/LoginPage';
import React, { useEffect, useState } from 'react';
import { NotificationUIController } from './ui/shared/notifications/NotificationUIController';
import { Navbar } from './ui/navigation/Navbar';
import { About } from './ui/about/AboutPage';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { CreateAccountPage } from './ui/authentication/CreateAccountPage';
import { DashboardPage } from './ui/dashboard/DashboardPage';

const defaultAuthState = { username: '', authenticated: false };
const UserContext = React.createContext(defaultAuthState);

function App(): JSX.Element {
    const routeHistory = useHistory();

    const [authState, updateAuthState] = useState({
        username: '',
        authenticated: false,
    });

    const handleSignIn = (username: string) => {
        updateAuthState({ username: username, authenticated: true });
        localStorage.setItem('username', username);
    };

    //TODO: Clear localstorage and authentication on sign out

    useEffect(() => {
        if (authState.authenticated && authState.username) {
            routeHistory.push('/dashboard');
        }
    }, [authState, routeHistory]);

    return (
        <div>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/signin">
                        <LoginPage signIn={handleSignIn} />
                    </Route>
                    <Route path="/createAccount">
                        <CreateAccountPage signIn={handleSignIn} />
                    </Route>
                    <Route path="/dashboard">
                        {authState.authenticated ? (
                            <UserContext.Provider value={authState}>
                                <DashboardPage />
                            </UserContext.Provider>
                        ) : (
                            <Redirect to="/" />
                        )}
                    </Route>
                </Switch>
            </div>
            <NotificationUIController />
        </div>
    );
}

export { UserContext };
export default App;
