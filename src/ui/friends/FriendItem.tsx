import { AccountCircle, MoreVert } from '@material-ui/icons';
import { User } from '../../../../model/Types';

interface FriendItemProps {
    friend: User;
    activeFriendUsername?: string | undefined;
    onFriendClick?: (username: string) => void;
}

function FriendItem(props: FriendItemProps): JSX.Element {
    return (
        <div
            className={`frienditem ${
                props.activeFriendUsername === props.friend.username
                    ? 'activeFriend'
                    : ''
            }`}
            onClick={() => {
                props.onFriendClick
                    ? props.onFriendClick(props.friend.username)
                    : null;
            }}
        >
            <div className="friendinfo">
                <AccountCircle style={{ height: '40px', width: '40px' }} />
                <div>
                    <p className="friendname">{props.friend.username}</p>
                    <p>{props.friend.avatar}</p>
                </div>
            </div>
        </div>
    );
}
export { FriendItem };
