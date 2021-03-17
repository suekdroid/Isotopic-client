import CSS from 'csstype';
import { useContext, useState } from 'react';
import {
    flexRowBetween,
    btnIcon,
    flexColumn,
    pageWrapper,
} from '../../style/SharedStyles';
import { TextArea, TextInput } from '../ui/TextInput';
import { Delete, Done, Label, Timer } from '@material-ui/icons';
import { Bullet, Note } from '../../model/Types';
import { AddBullets } from './bullets/AddBullets';
import {
    addNoteToServer,
    deleteNoteFromServer,
} from '../../api/content/NoteService';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../store/notificationSlice';
import { getApiErrorDisplayText } from '../../api/ApiErrorHandler';
import { UserContext } from '../../App';

interface EditNoteProps {
    note?: Note;
    onNoteCreated: (note: Note) => void;
    onNoteDeleted: (note: Note) => void;
}

function EditNote(props: EditNoteProps): JSX.Element {
    const dispatch = useDispatch();

    const authState = useContext(UserContext);

    const emptyNote = {
        owner: authState.username,
        title: '',
        content: '',
        bullets: [],
        _id: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };

    const [note, updateNote] = useState<Note>(
        props.note ? { ...props.note } : { ...emptyNote }
    );

    const submitNote = async () => {
        dispatch(setNotification({ msg: 'Saving note', type: 'loading' }));
        console.log('Current note state', note);
        try {
            const res = await addNoteToServer(note);
            console.log(res);
            if (res.status === 200) {
                dispatch(
                    setNotification({ msg: 'Note saved!', type: 'success' })
                );
                props.onNoteCreated(res.data);
                //Clear the UI on success
                updateNote({ ...emptyNote });
            }
        } catch (err) {
            dispatch(
                setNotification({
                    msg: getApiErrorDisplayText(err),
                    type: 'error',
                })
            );
        }
    };

    const deleteNote = async () => {
        if (note._id) {
            try {
                const res = await deleteNoteFromServer(note._id);
                if (res.status === 200) {
                    props.onNoteDeleted(res.data);
                }
                console.log('__DELETION EVENT RESULT', res);
            } catch (err) {
                dispatch(
                    setNotification({
                        msg: getApiErrorDisplayText(err),
                        type: 'error',
                    })
                );
            }
        } else {
            updateNote({ ...emptyNote });
        }
    };

    const setBulletListOnNote = (bulletlist: Bullet[]) =>
        updateNote({ ...note, bullets: [...bulletlist] });

    return (
        <div style={pageWrapper}>
            <div style={createNoteStyle} className="card">
                <TextInput
                    inputType="text"
                    label=""
                    placeholder="Type here!"
                    value={note.title}
                    updateInput={(data: string) =>
                        updateNote({ ...note, title: data })
                    }
                    validationError={''} //REMEMBER
                />
                {note.title && (
                    <div style={flexColumn}>
                        <TextArea
                            label=""
                            placeholder="Content"
                            value={note.content}
                            updateInput={(data: string) =>
                                updateNote({ ...note, content: data })
                            }
                            validationError={''} //REMEMBER
                        />
                        <div className="dark buttonCard">
                            <div style={flexRowBetween}>
                                <button style={btnIcon}>
                                    <Label />
                                </button>
                                <button style={btnIcon}>
                                    <Timer />
                                </button>
                                <button onClick={deleteNote} style={btnIcon}>
                                    <Delete />
                                </button>
                                <button onClick={submitNote} style={btnIcon}>
                                    <Done />
                                </button>
                            </div>
                        </div>
                        <AddBullets
                            bullets={note.bullets}
                            onUpdatedBulletArray={(bulletlist: Bullet[]) =>
                                setBulletListOnNote(bulletlist)
                            }
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

const createNoteStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '5px',
    transition: '1s',
};

export { EditNote };
