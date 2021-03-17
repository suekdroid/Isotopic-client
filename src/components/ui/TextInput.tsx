import { textError } from "../../style/SharedStyles";

//TODO: Separate into two components

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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
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
            />
        </div>
    );
}

interface TextAreaType {
    value: string;
    validationError: string;
    label: string;
    placeholder: string;
    updateInput: (textValue: string) => void;
}

function TextArea(props: TextAreaType): JSX.Element {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: "100%",
            }}
        >
            {props.validationError ? (
                <p style={textError}>{props.validationError}</p>
            ) : (
                <p>{props.label}</p>
            )}
            <textarea
                style={{ minHeight: "120px" }}
                value={props.value}
                onChange={(e) => props.updateInput(e.target.value)}
                placeholder={props.placeholder}
            ></textarea>
        </div>
    );
}
export { TextInput, TextArea };
