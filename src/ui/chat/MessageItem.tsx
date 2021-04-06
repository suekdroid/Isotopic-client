import { AccountCircle } from '@material-ui/icons';
import { Message } from '../../../../model/Types';

interface MessageProps {
    message: Message;
}

function MessageItem(props: MessageProps): JSX.Element {
    return (
        <div className="msgcontainer">
            <div className="msgfrom">
                <AccountCircle style={{ height: '40px', width: '40px' }} />
                <div className="msgabout">
                    <p className="friendname">{props.message.sender}</p>
                    <p className="dateSent">
                        {props.message.datesent.toLocaleString()}
                    </p>
                </div>
            </div>
            <div className="msgcontent">
                <p>{props.message.msg}</p>
            </div>
        </div>
    );
}
export { MessageItem };
