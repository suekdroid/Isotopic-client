import { useState } from 'react';
import { SearchInput } from '../shared/input/SearchInput';
import {
    findFriends,
    addFriend,
    removeFriend,
} from '../../api/content/FriendService';
import { getApiErrorDisplayText } from '../../api/ApiErrorHandler';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../store/notificationSlice';
import { User } from '../../../../model/Types';
import { FriendItem } from './FriendItem';
import { FriendList } from './FriendList';
import { SearchFriendList } from './SearchFriendList';

interface AddFriendsProps {
    currentFriendList: Array<User>;
    onAddFriend: (user: User) => void;
}

function AddFriends(props: AddFriendsProps): JSX.Element {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [resultFriendList, setResultFriendList] = useState<Array<User>>([]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            search();
        }
    };
    const search = async () => {
        if (searchString) {
            try {
                const res = await findFriends(searchString);
                if (res.status === 200 && res.data) {
                    console.log(res.data);
                    setResultFriendList([...res.data]);
                } else {
                    throw new Error('Something is off');
                }
            } catch (err) {
                dispatch(
                    setNotification({
                        msg: getApiErrorDisplayText(err),
                        type: 'error',
                    })
                );
            }
        } else {
            setResultFriendList([]);
        }
    };
    const handleOnFriendClicked = () => {
        console.log('friend clicked');
    };

    const sendFriendRequest = async (user: User) => {
        try {
            const friendRequestResult = await addFriend(user);
            if (
                friendRequestResult.status === 200 &&
                friendRequestResult.data
            ) {
                const user = friendRequestResult.data; //We get the current user in return
                props.onAddFriend(user);
                dispatch(
                    setNotification({
                        msg: `Succesfully added friend!`,
                        type: 'success',
                    })
                );
            } else {
                throw new Error('Failed adding friend');
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
    return (
        <div className="addfriends">
            <h3>Find friends</h3>
            <div className="searchfriends" onKeyDown={handleKeyDown}>
                <SearchInput
                    placeholder="Search by username"
                    searchString={searchString}
                    onSearchButtonClick={search}
                    onSearchStringChanged={(data) => setSearchString(data)}
                />
            </div>
            <p>Search results: {resultFriendList.length}</p>
            <SearchFriendList
                currentFriendList={props.currentFriendList}
                searchList={resultFriendList}
                onAddFriend={sendFriendRequest}
            />
        </div>
    );
}
export { AddFriends };
