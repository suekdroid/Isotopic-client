import io from "socket.io-client";

const BASE_URL = process.env.REACTSOCKETURL || 'http://localhost:3000'
// const BASE_URL = 'http://localhost:3000'

export default function getSocket(username: string) : SocketIOClient.Socket {
    return io(BASE_URL,{ 
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: 5,
        secure: true,
        rejectUnauthorized: false,
        auth: { username: username }}
    )
}