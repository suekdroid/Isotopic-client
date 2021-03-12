import { textError } from "../../style/SharedStyles"

interface PropType {
    inputType: string
    value: string
    validationError: string
    label: string
    placeholder: string
    updateInput: Function
}

function TextInput(props: PropType){
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px'}}>
            {
                (props.validationError) ? 
                    <p style={ textError }>{props.validationError}</p> : 
                    <p>{props.label}</p>
            }
            <input 
                value={props.value}
                onChange={(e)=>props.updateInput(e.target.value)}
                type={props.inputType}
                placeholder={props.placeholder}/>
        </div>
    )
}
export { TextInput }