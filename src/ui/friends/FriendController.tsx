import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../../../model/Types';
import { getApiErrorDisplayText } from '../../api/ApiErrorHandler';
import { getUser } from '../../api/content/FriendService';
import { UserContext } from '../../App';
import { setNotification } from '../../store/notificationSlice';
import { AddFriends } from './AddFriends';
import { FriendList } from './FriendList';
import './friends.css';
function FriendController(): JSX.Element {
    const dispatch = useDispatch();

    const authstate = useContext(UserContext);

    const [friendList, setFriendList] = useState<Array<User>>([]);

    useEffect(() => {
        fetchFriendList();
    }, []);

    const fetchFriendList = async () => {
        try {
            const res = await getUser(authstate.username);
            if (res.status === 200 && res.data) {
                setFriendList([...res.data.friends]);
            }
        } catch (err) {
            dispatch(
                setNotification({
                    msg: getApiErrorDisplayText(err),
                    type: 'error',
                })
            );
        }
    };
    const handleOnAddFriend = (user: User) => {
        setFriendList([...user.friends]);
    };
    const handleOnFriendSelected = () => {
        console.log('You clicked a friend ');
    };
    return (
        <div className="friendcontroller">
            <div></div>
            <AddFriends
                currentFriendList={friendList}
                onAddFriend={handleOnAddFriend}
            />
            <FriendList
                friendList={friendList}
                activeFriendUsername={undefined}
                onFriendSelected={handleOnFriendSelected}
            />
        </div>
    );
}
export { FriendController };
