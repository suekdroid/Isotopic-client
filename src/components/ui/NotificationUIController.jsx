import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearNotification } from "../../store/notificationSlice"
import { Notification } from "./Notification"

function NotificationUIController(){
    const dispatch = useDispatch()
    const notification = useSelector(state=>state.notification)

    const clearMessage = () => dispatch(clearNotification())

    useEffect(()=>{
        if(notification.msg){
            setTimeout(()=>{dispatch(clearNotification())}, 3000)
        }
    }, [notification])

    return (
        <div>
            {(notification.msg) && <Notification 
                message={notification.msg} 
                type={notification.type} 
                dismissNotification={clearMessage}/>}
        </div>
    )
}
export { NotificationUIController }