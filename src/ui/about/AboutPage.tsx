import './about.css';
import { flexColumnCenter, flexRow } from '../../style/SharedStyles';
import reactLogo from '../../assets/logo192.png';
import { Link } from 'react-router-dom';

function About(): JSX.Element {
    return (
        <div className="gradient">
            <div style={flexColumnCenter}>
                <h1 className="aboutHeadline">Your ideas. Optimized.</h1>
                <p className="aboutSubHeadline">
                    Group, syncronize and communicate your ideas with Isotopic
                </p>
                <Link to="/createAccount" className="basicLink">
                    <button>Sign up!</button>
                </Link>
                <div style={flexRow}>
                    <p className="aboutParagraph">Already a user?</p>
                    <Link to="/signin" className="basicLink">
                        Sign in
                    </Link>
                </div>
            </div>
            <div
                style={{ ...flexColumnCenter, marginTop: '80px' }}
                className="createdWith"
            >
                <p className="aboutParagraph">
                    Created with React, NodeJS and SocketIO
                </p>
                <div>
                    <img src={reactLogo} className="logo" alt="React" />
                </div>
            </div>
        </div>
    );
}

export { About };
