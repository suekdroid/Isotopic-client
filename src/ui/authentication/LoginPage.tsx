import { Login } from './Login';
import { flexRowCenter } from '../../style/SharedStyles';

interface LoginPageProps {
    signIn: (username: string) => void;
}

function LoginPage(props: LoginPageProps): JSX.Element {
    const propagateSignIn = (username: string) => {
        props.signIn(username);
    };

    return (
        <div style={flexRowCenter}>
            <Login onSuccessfulSignIn={propagateSignIn} />
        </div>
    );
}

export { LoginPage };
