import './notes.css';
import { Note } from '../../../../model/Types';
import { EditNote } from './EditNote';

interface NoteModalProps {
    note?: Note;
    onNoteDeleted: (note: Note) => void;
    onNoteChanged: (note: Note) => void;
    closeModal: () => void;
}

function NoteModal(props: NoteModalProps): JSX.Element {
    return (
        <div className="modalStyle">
            <div className="modalContent">
                <EditNote
                    note={props.note}
                    onNoteDeleted={(note: Note) => {
                        props.onNoteDeleted(note);
                        props.closeModal();
                    }}
                    onNoteCreated={(note: Note) => {
                        props.onNoteChanged(note);
                        props.closeModal();
                    }}
                />
            </div>
        </div>
    );
}

export { NoteModal };
