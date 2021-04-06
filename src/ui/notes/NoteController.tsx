import './notes.css';
import { SearchInput } from '../shared/input/SearchInput';
import { EditNote } from './EditNote';
import { NoteList } from './NoteList';
import { useContext, useEffect, useState } from 'react';
import { Note } from '../../../../model/Types';
import { getNotesFromServer } from '../../api/content/NoteService';
import { UserContext } from '../../App';

function NoteController(): JSX.Element {
    const [noteList, updateNoteList] = useState<Array<Note>>([]);
    const [filteredNoteList, updateFilteredNoteList] = useState<Array<Note>>(
        []
    );
    const [searchString, updateSearchString] = useState('');

    const userContext = useContext(UserContext);

    //Consider using axios cancel tokens
    useEffect(() => {
        fetchNotes();
        return () => console.log('clean up!');
    }, []);

    const fetchNotes = async () => {
        const result = await getNotesFromServer(userContext.username);
        if (result.data) {
            updateNoteList([...result.data]);
        }
    };

    const handleOnNoteCreated = (note: Note) => {
        updateNoteList([note, ...noteList]);
    };
    const handleOnNoteChanged = (note: Note) => {
        updateNoteList(
            noteList.map((ele) => (ele._id === note._id ? { ...note } : ele))
        );
    };
    const handleOnNoteDeleted = (note: Note) => {
        updateNoteList(noteList.filter((ele) => ele._id !== note._id));
    };

    const handleSearch = (text: string) => {
        updateSearchString(text);
    };

    const handleSearchButtonClick = () => {
        //Do nothing
    };

    useEffect(() => {
        updateFilteredNoteList(
            noteList.filter(
                (note) =>
                    note.title.includes(searchString) ||
                    note.content.includes(searchString) ||
                    note.bullets.find((bullet) =>
                        bullet.bulletText.includes(searchString)
                    )
            )
        );
    }, [searchString, noteList]);

    return (
        <div className="noteControllerRoot">
            <EditNote
                onNoteCreated={handleOnNoteCreated}
                onNoteDeleted={handleOnNoteDeleted}
            />
            <SearchInput
                placeholder="Search"
                searchString={searchString}
                onSearchButtonClick={handleSearchButtonClick}
                onSearchStringChanged={handleSearch}
            />
            <NoteList
                onNoteDeleted={handleOnNoteDeleted}
                noteList={filteredNoteList}
                onNoteChanged={handleOnNoteChanged}
            />
        </div>
    );
}

export { NoteController };
