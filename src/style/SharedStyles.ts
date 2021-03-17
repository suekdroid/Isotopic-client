import CSS from 'csstype';

const pageWrapper: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px'
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

const flexRowBetween: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

const btnIconText: CSS.Properties = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: '3px'
}

const btnIcon: CSS.Properties = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
}

const textError: CSS.Properties = {
    color: 'orange'
}

const textIconAlign: CSS.Properties = {
    display:'inline-flex', 
    verticalAlign: 'middle',
    justifyContent: 'flex-start'
}

const alignedIcon: CSS.Properties = {
    position: 'relative', 
    top: '1px'
}

export { 
    pageWrapper, 
    flexColumn, 
    flexRow, 
    flexRowBetween,
    btnText,
    btnIcon,
    btnIconText,
    textError,
    textIconAlign,
    alignedIcon
}      
