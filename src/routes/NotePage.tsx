import { SearchNotes } from "../components/notes/SearchNotes";
import { CreateNote } from "../components/notes/CreateNote";
import { NoteList } from "../components/notes/NoteList";
import { useEffect, useState } from "react";
import { Note } from "../model/Types";
import { getNotesFromServer } from "../api/content/NoteService";

function NotePage(): JSX.Element {
    const [noteList, updateNoteList] = useState<Array<Note>>([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const result = await getNotesFromServer("testuser");
        if (result.data) {
            console.log("Result from server in NoteList component", result);
            updateNoteList([...result.data]);
        }
    };

    const handleSearch = () => {
        console.log("handling search");
    };
    const handleOnNoteCreated = (note: Note) =>
        updateNoteList([note, ...noteList]);
    const handleOnNoteChanged = (note: Note) => {
        console.log("Inside handleOnNoteChanged", note);
    };
    // const handleOnCheckboxStateChange = ({bulletID, checked} : {bulletID:number, checked:boolean}) => {

    //     const note = noteList.find(note=>note.bullets.find(bullet=>bullet.bulletID===bulletID))
    //     if(note){
    //         const newBulletArray = note.bullets.map(bullet=> (bullet.bulletID===bulletID) ? {...bullet, checked: checked}: bullet) //Consider not returning the checked state
    //         note.bullets = [...newBulletArray]
    //     }

    //     // const updatedList = noteList.map(note=> (note.bullets.find(bullet=>bullet.bulletID===bulletID)) ? {...note} : note)
    // }

    return (
        <div>
            <SearchNotes />
            <CreateNote onNoteCreated={handleOnNoteCreated} />
            <NoteList noteList={noteList} onNoteChanged={handleOnNoteChanged} />
        </div>
    );
}

export { NotePage };
