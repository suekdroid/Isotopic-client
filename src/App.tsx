import "./App.css";
import { NotePage } from "./routes/NotePage";
import { LoginPage } from "./routes/LoginPage";
import { useState } from "react";
import { NotificationUIController } from "./components/ui/NotificationUIController";
import { Navbar } from "./components/navigation/Navbar";

function App(): JSX.Element {
    const [userState, updateUserState] = useState({
        username: "",
        authenticated: true,
    }); //debugging
    const handleSignIn = (username: string) => {
        updateUserState({ username: username, authenticated: true });
    };
    // const handleSignOut = () => updateUserState({username:'', authenticated: false})

    return (
        <div className="App">
            <Navbar />
            {userState.authenticated ? (
                <NotePage />
            ) : (
                <LoginPage signIn={handleSignIn} />
            )}
            <NotificationUIController />
        </div>
    );
}

export default App;
