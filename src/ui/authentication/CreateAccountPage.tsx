import { CreateAccount } from './CreateAccount';
import { flexRowCenter } from '../../style/SharedStyles';

interface CreateAccountPageProps {
    signIn: (username: string) => void;
}

function CreateAccountPage(props: CreateAccountPageProps): JSX.Element {
    const propagateSignIn = (username: string) => {
        props.signIn(username);
    };

    return (
        <div style={flexRowCenter}>
            <CreateAccount onSuccessfulSignIn={propagateSignIn} />
        </div>
    );
}
export { CreateAccountPage };
