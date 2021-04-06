import CSS from 'csstype';

const pageWrapper: CSS.Properties = {
    display: 'flex',
    justifyContent: 'center',
    margin: '15px'
}

const flexColumn: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}

const flexColumnCenter: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
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

const flexRowCenter: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px', 
    alignItems: 'center',
    justifyContent: 'center'
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
    flexColumnCenter,
    flexRow, 
    flexRowBetween,
    flexRowCenter,
    btnText,
    btnIcon,
    btnIconText,
    textError,
    textIconAlign,
    alignedIcon
}      
