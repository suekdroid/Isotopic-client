import CSS from 'csstype';
import { Note } from '../../model/Types';
import { EditNote } from './EditNote';

interface NoteModalProps {
    note?: Note;
    onNoteDeleted: (note: Note) => void;
    onNoteChanged: (note: Note) => void;
    closeModal: () => void;
}

function NoteModal(props: NoteModalProps): JSX.Element {
    return (
        <div style={modalStyle}>
            <div style={modalContent}>
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

const modalStyle: CSS.Properties = {
    backgroundColor: 'rgb(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: '0',
    top: '0',
};

const modalContent: CSS.Properties = {
    marginTop: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
};

export { NoteModal };
