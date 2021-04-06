import './notifications.css';
import Announcement from '@material-ui/icons/Announcement';
import Close from '@material-ui/icons/Close';
import CSS from 'csstype';
import { useEffect, useState } from 'react';

interface NotificationProps {
    type: string;
    message: string;
    dismissNotification: React.MouseEventHandler<HTMLButtonElement>;
}

function Notification(props: NotificationProps): JSX.Element {
    const [notificationType, updateNotificationType] = useState(types.info);

    useEffect(() => {
        if (props.type) {
            updateNotificationType(types[props.type]);
        }
    }, [props.type]);

    return (
        <div className="notificationContainer">
            <div className="notification" style={{ ...notificationType }}>
                {props.type === 'loading' ? (
                    <div className="spinner"></div>
                ) : (
                    <Announcement className="iconNotification" />
                )}
                <p> {props.message} </p>
                <button
                    className="btnCloseNotification"
                    onClick={props.dismissNotification}
                >
                    <Close />
                </button>
            </div>
        </div>
    );
}

const types: { [key: string]: CSS.Properties } = {
    error: { backgroundColor: 'rgb(244, 67, 54)' },
    warning: { backgroundColor: 'rgb(220, 130, 0)' },
    info: { backgroundColor: 'rgb(33, 150, 243)' },
    loading: { backgroundColor: 'rgb(33, 150, 243)' },
    success: { backgroundColor: 'rgb(76, 175, 80)' },
};

export { Notification };
