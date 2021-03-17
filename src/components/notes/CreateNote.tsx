import CSS from "csstype";
import { useEffect, useState } from "react";
import {
    flexRowBetween,
    btnIcon,
    flexColumn,
    pageWrapper,
} from "../../style/SharedStyles";
import { TextArea, TextInput } from "../ui/TextInput";
import { Done, Label, Timer } from "@material-ui/icons";
import { Bullet, Note } from "../../model/Types";
import { AddBullets } from "./bullets/AddBullets";
import { addNoteToServer } from "../../api/content/NoteService";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store/notificationSlice";
import { getApiErrorDisplayText } from "../../api/ApiErrorHandler";

interface CreateNoteProps {
    note?: Note;
    onNoteCreated: (noteArray: Note) => void;
}

function CreateNote(props: CreateNoteProps): JSX.Element {
    const dispatch = useDispatch();

    const [note, updateNote] = useState<Note>({
        owner: "testuser",
        title: "",
        content: "",
        bullets: [],
    });

    useEffect(() => {
        console.log(
            "Inside useEffect in createNote. The note prop bullet list is: ",
            props.note?.bullets
        );
        if (props.note) {
            updateNote({ ...props.note });
        }
    }, []);

    const submitNote = async () => {
        dispatch(setNotification({ msg: "Creating note", type: "loading" }));
        console.log("Current note state", note);
        try {
            const res = await addNoteToServer(note);
            console.log(res);
            if (res.status === 200) {
                dispatch(
                    setNotification({ msg: "Note created!", type: "success" })
                );
                props.onNoteCreated(res.data);
            }
        } catch (err) {
            dispatch(
                setNotification({
                    msg: getApiErrorDisplayText(err),
                    type: "error",
                })
            );
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
                    validationError={""} //REMEMBER
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
                            validationError={""} //REMEMBER
                        />
                        <div className="dark buttonCard">
                            <div style={flexRowBetween}>
                                {/* <button onClick={addEmptyBullet} style={ btnIcon }><AddTask/></button> */}
                                <button style={btnIcon}>
                                    <Label />
                                </button>
                                <button style={btnIcon}>
                                    <Timer />
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
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    borderRadius: "5px",
    transition: "1s",
};

export { CreateNote };
