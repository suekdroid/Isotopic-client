import { User } from '../../../../model/Types';
import { FriendItem } from './FriendItem';

interface SearchFriendListProps {
    searchList: Array<User>;
    currentFriendList: Array<User>;
    onAddFriend: (user: User) => void;
}

function SearchFriendList(props: SearchFriendListProps): JSX.Element {
    return (
        <div className="chatfriendlist">
            {props.searchList.map((user) => (
                <div className={`addFriendItem`}>
                    <FriendItem friend={user} />
                    {props.currentFriendList.find(
                        (friend) => friend.username === user.username
                    ) ? (
                        <p>Already a friend</p>
                    ) : (
                        <button
                            onClick={() =>
                                props.onAddFriend
                                    ? props.onAddFriend(user)
                                    : null
                            }
                        >
                            Add
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
}
export { SearchFriendList };
