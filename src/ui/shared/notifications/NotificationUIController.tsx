import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { clearNotification } from '../../../store/notificationSlice';
import { Notification } from './Notification';

function NotificationUIController(): JSX.Element {
    const dispatch = useDispatch();
    const notification = useSelector(
        (state: RootStateOrAny) => state.notification
    );

    const clearMessage = () => dispatch(clearNotification());

    useEffect(() => {
        if (notification.msg) {
            setTimeout(() => {
                dispatch(clearNotification());
            }, 2500);
        }
    }, [notification, dispatch]);

    return (
        <div>
            {notification.msg && (
                <Notification
                    message={notification.msg}
                    type={notification.type}
                    dismissNotification={clearMessage}
                />
            )}
        </div>
    );
}
export { NotificationUIController };
