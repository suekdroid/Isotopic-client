import CSS from 'csstype';
import { pageWrapper } from '../../style/SharedStyles';
import { Note } from '../../model/Types';
import { ReadOnlyBulletItem } from './bullets/ReadOnlyBulletItem';
import { useState } from 'react';
import { NoteModal } from './NoteModal';

interface NoteListProps {
    noteList: Array<Note>;
    onNoteChanged: (note: Note) => void;
}

function NoteList(props: NoteListProps): JSX.Element {
    const [modalState, updateModalState] = useState<{
        showModal: boolean;
        noteInFocus?: Note;
    }>({ showModal: false, noteInFocus: undefined });
    const handleCardClick = (noteID?: string) => {
        if (noteID) {
            const note = props.noteList.find((note) => note._id === noteID);
            if (note) {
                updateModalState({ showModal: true, noteInFocus: note });
            }
        }
    };
    const handleCloseModal = () =>
        updateModalState({ showModal: false, noteInFocus: undefined });

    return (
        <div>
            <div style={pageWrapper}>
                <div style={createNoteStyle}>
                    {props.noteList.map((ele) => (
                        <div
                            key={ele._id}
                            style={divNoteCard}
                            className="cardColor"
                            onClick={() => handleCardClick(ele._id)}
                        >
                            <p style={paraTitle}>{ele.title}</p>
                            <p>{ele.content}</p>
                            <ul>
                                {ele.bullets.map((bullet) => (
                                    <ReadOnlyBulletItem
                                        key={bullet.bulletID}
                                        bullet={bullet}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {modalState.showModal === true && (
                <NoteModal
                    onNoteChanged={props.onNoteChanged}
                    note={modalState.noteInFocus}
                    closeModal={handleCloseModal}
                />
            )}
        </div>
    );
}

const createNoteStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    transition: '1s',
    gap: '8px',
    width: '100%',
    maxWidth: '800px',
};

const divNoteCard: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '90%',
    border: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(255,255,255,0.2)',
    padding: '15px',
    borderRadius: '5px',
};

const paraTitle: CSS.Properties = {
    fontWeight: 'bolder',
};

export { NoteList };
