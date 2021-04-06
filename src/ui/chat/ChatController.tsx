import './chat.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import getSocket from '../../lib/messaging/socket';
import { UserContext } from '../../App';
import { FriendList } from '../friends/FriendList';
import { MessageList } from './MessageList';
import { Message, User } from '../../../../model/Types';
import { getUser } from '../../api/content/FriendService';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../store/notificationSlice';
import { getApiErrorDisplayText } from '../../api/ApiErrorHandler';

function ChatController(): JSX.Element {
    //User context
    const authState = useContext(UserContext);
    const dispatch = useDispatch();

    const [activeFriend, setActiveFriend] = useState<string | undefined>(
        undefined
    );

    //Messages
    const [messageArray, updateMessageArray] = useState<Array<Message>>([]);

    //Create new message
    const [msgInput, changeMsgInput] = useState({ value: '' });

    //Socket instance
    const socketRef = useRef<SocketIOClient.Socket>();

    useEffect(() => {
        socketRef.current = getSocket(authState.username).connect();

        socketRef.current.on('chat message', (args: any) => {
            console.log('Incoming chat message', args);
            const { sender, receiver, datesent, msg, messageid } = args;
            if (sender && receiver && datesent && msg && messageid) {
                updateMessageArray((messageArray) => [
                    ...messageArray,
                    { sender, receiver, datesent, msg, messageid },
                ]);
            }
        });

        socketRef.current.on('messagebundle', (args: Array<Message>) => {
            console.log(args);
            //TODO: Check the integrity of the received elements first
            updateMessageArray([...args]);
        });

        return function () {
            if (socketRef.current) {
                socketRef.current.off('chat message');
                socketRef.current.off('messagebundle');
                socketRef.current.disconnect();
            }
        };
    }, []);

    const sendMessage = () => {
        if (socketRef.current && authState.username && activeFriend) {
            // TODO: Use a factory function?
            const message: Message = {
                messageid: Math.random(),
                sender: authState.username,
                receiver: activeFriend,
                datesent: new Date(),
                msg: msgInput.value,
            };
            socketRef.current.emit('event', message);
            changeMsgInput({ value: '' });
        } else {
            console.log('Socket not connected?');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeMsgInput({ value: e.currentTarget.value });
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const handleFriendSelected = (username: string) => {
        if (activeFriend !== username) {
            setActiveFriend(username);
            getMessageHistory(username);
        }
    };

    const getMessageHistory = (username: string) => {
        if (socketRef.current && authState.username) {
            socketRef.current.emit('newchat', {
                sender: authState.username,
                receiver: username,
            });
            changeMsgInput({ value: '' });
        } else {
            console.log('Socket not connected?');
        }
    };

    const [friendList, setFriendList] = useState<Array<User>>([]);
    useEffect(() => {
        fetchFriendList();
    }, []);
    const fetchFriendList = async () => {
        try {
            const res = await getUser(authState.username);
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

    return (
        <div className="chatcontroller">
            <div></div>
            <div className="chatwindow">
                {activeFriend && (
                    <p style={{ margin: '15px 0 0 20px' }}>
                        Chatting with: {activeFriend}
                    </p>
                )}
                {activeFriend && <MessageList messageArray={messageArray} />}
                <div className="divInput">
                    <input
                        type="text"
                        className="textInputField"
                        placeholder={
                            activeFriend ? 'Aa' : 'Please select a friend'
                        }
                        value={msgInput.value}
                        onChange={(e) => handleInputChange(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                </div>
            </div>
            <FriendList
                friendList={friendList}
                activeFriendUsername={activeFriend}
                onFriendSelected={handleFriendSelected}
            />
        </div>
    );
}
export { ChatController };
