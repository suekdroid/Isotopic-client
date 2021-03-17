import CSS from "csstype";
import { Note } from "../../model/Types";
import { CreateNote } from "./CreateNote";

interface NoteModalProps {
    note?: Note;
    closeModal: () => void;
}

function NoteModal(props: NoteModalProps): JSX.Element {
    const handleOnNoteCreated = () => {
        console.log("inside handleOnNoteCreated in NoteModal");
    };
    return (
        <div style={modalStyle}>
            <div style={modalContent}>
                <CreateNote
                    note={props.note}
                    onNoteCreated={handleOnNoteCreated}
                />
                <button onClick={() => props.closeModal()}>Close</button>
            </div>
        </div>
    );
}

const modalStyle: CSS.Properties = {
    backgroundColor: "rgb(0,0,0,0.8)",
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "0",
};

const modalContent: CSS.Properties = {
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
};

export { NoteModal };
