import { SearchNotes } from '../components/notes/SearchNotes';
import { EditNote } from '../components/notes/EditNote';
import { NoteList } from '../components/notes/NoteList';
import { useContext, useEffect, useState } from 'react';
import { Note } from '../model/Types';
import { getNotesFromServer } from '../api/content/NoteService';
import { UserContext } from '../App';

function NotePage(): JSX.Element {
    const [noteList, updateNoteList] = useState<Array<Note>>([]);

    const userContext = useContext(UserContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        //TODO: Should check if usercontext is properly set?
        const result = await getNotesFromServer(userContext.username);
        if (result.data) {
            console.log('Result from server in NoteList component', result);
            updateNoteList([...result.data]);
        }
    };

    const handleSearch = () => {
        console.log('handling search');
    };
    const handleOnNoteCreated = (note: Note) => {
        updateNoteList([note, ...noteList]);
    };
    const handleOnNoteChanged = (note: Note) => {
        console.log('Inside handleOnNoteChanged', note);
        const newNoteList = noteList.map((ele) =>
            ele._id === note._id ? { ...note } : ele
        );
        updateNoteList([...newNoteList]);
    };

    return (
        <div>
            <SearchNotes />
            <EditNote onNoteCreated={handleOnNoteCreated} />
            <NoteList noteList={noteList} onNoteChanged={handleOnNoteChanged} />
        </div>
    );
}

export { NotePage };
