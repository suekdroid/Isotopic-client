import './notes.css';
import { useContext, useState } from 'react';
import {
    flexRowBetween,
    btnIcon,
    flexColumn,
    pageWrapper,
} from '../../style/SharedStyles';
import { TextInput } from '../../ui/shared/input/TextInput';
import { TextArea } from '../../ui/shared/input/TextArea';
import { Delete, Done, Label, Timer } from '@material-ui/icons';
import { Bullet, Note } from '../../../../model/Types';
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

    const addLabel = () => {
        dispatch(
            setNotification({
                msg: `Labels are currently not supported`,
                type: 'warning',
            })
        );
    };

    const addTimer = () => {
        dispatch(
            setNotification({
                msg: `Timers are currently not supported`,
                type: 'warning',
            })
        );
    };

    return (
        <div style={pageWrapper}>
            <div className="card editNote">
                <TextInput
                    inputType="text"
                    label=""
                    placeholder="Type here to create!"
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
                                <button onClick={addLabel} style={btnIcon}>
                                    <Label />
                                </button>
                                <button onClick={addTimer} style={btnIcon}>
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

export { EditNote };
