import { useState } from "react";
import { Login } from "../components/authentication/Login";
import { CreateAccount } from "../components/authentication/CreateAccount";

const UI_MODES = {
    LOGIN: "MODE_LOGIN",
    SIGNUP: "MODE_SIGNUP",
};

interface LoginPageProps {
    signIn: (username: string) => void;
}

function LoginPage(props: LoginPageProps): JSX.Element {
    const [UIState, updateUIState] = useState({ mode: UI_MODES.LOGIN });

    const setUIState = () => {
        switch (UIState.mode) {
            case UI_MODES.LOGIN:
                updateUIState({ mode: UI_MODES.SIGNUP });
                break;
            case UI_MODES.SIGNUP:
                updateUIState({ mode: UI_MODES.LOGIN });
                break;
            default:
                updateUIState({ mode: UI_MODES.LOGIN });
        }
    };

    const propagateSignIn = (username: string) => {
        props.signIn(username);
    };

    return (
        <div>
            {UIState.mode === UI_MODES.LOGIN ? (
                <Login
                    onNavigate={setUIState}
                    onSuccessfulSignIn={propagateSignIn}
                />
            ) : (
                <CreateAccount onNavigate={setUIState} />
            )}
        </div>
    );
}

export { LoginPage };
