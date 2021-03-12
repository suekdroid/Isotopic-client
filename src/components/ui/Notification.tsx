import Announcement from '@material-ui/icons/Announcement';
import Close from '@material-ui/icons/Close';
import CSS from 'csstype';
import { useEffect, useState } from 'react';

interface NotificationProps {
    type: string
    message: string
    dismissNotification: React.MouseEventHandler<HTMLButtonElement>
}

function Notification(props: NotificationProps){

    const [notificationType, updateNotificationType] = useState(types.info)

    useEffect(()=>{if(props.type){updateNotificationType(types[props.type])}},[props.type])

    return (
        <div style={ notificationContainer}>
                <div style={ {...notification, ...notificationType } }>
                        {(props.type==='loading') ? <div className="spinner"></div> : <Announcement/>}
                        <p> {props.message} </p>
                        <button className="btnIcon" onClick={props.dismissNotification}><Close/></button>
                </div>
        </div>
    )
    
}

const types: {[key:string]: CSS.Properties} = { 
    error: {backgroundColor: 'rgb(244, 67, 54)'}, 
    warning: {backgroundColor: 'rgb(220, 130, 0)'},
    info: {backgroundColor: 'rgb(33, 150, 243)'},
    loading: {backgroundColor: 'rgb(33, 150, 243)'},
    success: {backgroundColor: 'rgb(76, 175, 80)'}
}


const notification: CSS.Properties = {
    display: 'flex',
    alignItems: 'center',
    wordWrap: 'break-word',
    justifyContent: 'space-between',
    height: '45px',
    minWidth: '300px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    paddingLeft: '20px', 
    borderRadius: '5px',
    boxShadow: '3px 3px 5px rgb(0, 0, 0, 0.3)',
    transition: '0.5s'
}

const notificationContainer: CSS.Properties = {
    position: 'fixed',
    left: '50%',
    bottom: '20%',
    transform: 'translate(-50%, 0)'
}

export { Notification }