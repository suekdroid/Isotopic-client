import CSS from 'csstype';

const pageWrapper: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px'
}

const flexColumn: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
}

const flexRow: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px', 
    alignItems: 'center',
} 

const btnText: CSS.Properties = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    color: 'white',
    fontSize: '14px'
}

const textError: CSS.Properties = {
    color: 'orange'
}

export { 
    pageWrapper, 
    flexColumn, 
    flexRow, 
    btnText,
    textError
}      
