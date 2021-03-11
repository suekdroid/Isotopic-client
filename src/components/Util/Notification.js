import Announcement from '@material-ui/icons/Announcement';
import Close from '@material-ui/icons/Close';

function Notification(props){

    const notificationContainer = {
        position: 'fixed',
        left: '50%',
        bottom: '20%',
        // left: '50%',
        transform: 'translate(-50%, 0)'
    }
    
    const notification = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '45px',
        minWidth: '300px',
        color: 'white',
        fontSize: '16px',
        fontWeight: '600',
        paddingLeft: '20px', 
        borderRadius: '5px',
        boxShadow: '3px 3px 5px rgb(0, 0, 0, 0.3)',
        transition: '0.5s'
    }

    const types = {
        error: {backgroundColor: 'rgb(244, 67, 54)'},
        warning: {backgroundColor: 'rgb(220, 130, 0)'},
        info: {backgroundColor: 'rgb(33, 150, 243)'},
        loading: {backgroundColor: 'rgb(33, 150, 243)'},
        success: {backgroundColor: 'rgb(76, 175, 80)'}
    }

    return (
        <div style={ notificationContainer}>
                <div style={ {...notification, ...(types[props.type]) ? types[props.type] : types.info} }>
                        {(props.type==='loading') ? <div className="spinner"></div> : <Announcement/>}
                        <p>{props.message}</p>
                        <button className="btnIcon" onClick={props.dismissNotification}><Close/></button>
                </div>
        </div>
    )

}

export { Notification }