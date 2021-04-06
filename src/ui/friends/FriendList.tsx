import { User } from '../../../../model/Types';
import { FriendItem } from './FriendItem';

interface FriendListProps {
    friendList: Array<User>;
    activeFriendUsername: string | undefined;
    onFriendSelected?: (username: string) => void;
}

function FriendList(props: FriendListProps): JSX.Element {
    return (
        <div className="chatfriendlist">
            <h3>Friends</h3>
            {props.friendList.length > 0 ? (
                props.friendList.map((friend) => (
                    <div className="addFriendItem">
                        <FriendItem
                            onFriendClick={props.onFriendSelected}
                            friend={friend}
                            activeFriendUsername={props.activeFriendUsername}
                        />
                    </div>
                ))
            ) : (
                <div className="divnofriends">
                    <p>You have 0 friends. Find some!</p>
                </div>
            )}
        </div>
    );
}
export { FriendList };
