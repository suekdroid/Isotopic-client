import { Message } from '../../../../model/Types';
import { MessageItem } from './MessageItem';

interface MessageListProps {
    messageArray: Array<Message>;
}

function MessageList(props: MessageListProps): JSX.Element {
    return (
        <div>
            <div className="messages">
                {props.messageArray.map((message) => (
                    <MessageItem key={message.messageid} message={message} />
                ))}
            </div>
        </div>
    );
}

export { MessageList };
