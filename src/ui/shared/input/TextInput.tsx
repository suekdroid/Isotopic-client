import './input.css';
import { textError } from '../../../style/SharedStyles';

interface InputType {
    inputType: string;
    value: string;
    validationError: string;
    label: string;
    placeholder: string;
    updateInput: (textValue: string) => void;
}

function TextInput(props: InputType): JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            {props.validationError ? (
                <p style={textError}>{props.validationError}</p>
            ) : (
                <p>{props.label}</p>
            )}

            <input
                value={props.value}
                onChange={(e) => props.updateInput(e.target.value)}
                type={props.inputType}
                placeholder={props.placeholder}
                className={props.validationError ? 'validationError' : ''}
            />
        </div>
    );
}

export { TextInput };
