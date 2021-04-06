import getSocket from './socket'

export function useSocketIO(){

        const username = 'testuser' //Only for testing

        const socket = getSocket(username)

        setupGeneralListeners(socket)

        const connectSocket = () => {
            socket.connect()
        }

        const sendMessage = (receiver: string, msg: string) => {
            socket.emit('event', {sender:username, receiver, msg})
        }

        return { connectSocket, sendMessage, socket }

}

function setupGeneralListeners(socket: SocketIOClient.Socket){
    socket.on('connect', (args: any)=>{
        console.log(`Socket connected`, args);
    })

    socket.on('info', (args:any)=>{
        console.log(`Socket INFO: `, args);
    })

    socket.on('warning',(args:any)=>{
        console.log(`Socket WARNING: `, args)
    })
}

//     const store = useStore()
//     const username = store.getters.getStoreUsername
//     const socketio = getSocketIOClient(username)

//     const messages = ref([])
//     const errors = ref([])

//     const connectSocketIO = () => {
//         console.log('Initializing socketIO connection')
//         socketio.connect()
//     }

//     const sendMessage = (receiver, msg) => {
//         if(username){
//             if(msg){
//                 console.log('Emitting message', {sender:username,receiver,msg})
//                 socketio.emit('event', {sender:username, receiver, msg})
//             } 
//         } else {errors.value.push('Username undefined')}
//     }

//     const getStoredMessages = (receiver) => {
//         socketio.emit('new-chat', {sender:username, receiver})
//     }

//     const clearChatFromMessages = (receiver) => {
//         const newArray = messages.value.filter(message => message.sender !== username && message.receiver !== receiver)
//         messages.value = [...newArray]
//     }

//     socketio.on('connect',(arg)=>{console.log(`__ SOCKET CONNECTED __`)})
//     socketio.on('disconnect', (args)=>{console.log('__ SOCKET DISCONNECTED DISCONNECTED __')})

//     socketio.on('chat message', (message) =>{
//         console.log(`Socket on chat message`, message);
//         const { sender , receiver, msg } = message
//         if(sender && receiver && msg){
//             messages.value.push({ sender, receiver, msg })
//         } else {console.log(`Received message with empty content ${sender}, ${msg}.`)}
//     })

//     socketio.on('message_bundle', (bundle) => {
//         console.log(`Received bundle`, bundle)
//         messages.value = [...messages.value, ...bundle]
//     })

//     //Dev only
//     socketio.onAny((e, ...args) => {
//         console.log('onAny', e, args)
//     })

//     onMounted(()=>{connectSocketIO()})
//     onUnmounted(()=>socketio.close())

//     return { messages, sendMessage, getStoredMessages, clearChatFromMessages }