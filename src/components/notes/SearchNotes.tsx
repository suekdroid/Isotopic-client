import { Menu, Search } from '@material-ui/icons';
import CSS from 'csstype';
import { useState } from 'react';
import { btnIconText, flexRow, pageWrapper } from '../../style/SharedStyles';
import { TextInput } from '../ui/TextInput';

function SearchNotes(): JSX.Element {
    const [searchString, updateSearchString] = useState('');

    return (
        <div style={pageWrapper}>
            <div style={createNoteStyle} className="colorInput">
                <div style={flexRow}>
                    <button style={btnIconText}>
                        <Menu />
                    </button>
                    <TextInput
                        inputType="text"
                        label=""
                        placeholder="Search"
                        value={searchString}
                        updateInput={(data: string) => updateSearchString(data)}
                        validationError={''} //REMEMBER
                    />
                </div>
                <button style={btnIconText}>
                    <Search />
                </button>
            </div>
        </div>
    );
}

const createNoteStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '450px',
    borderRadius: '5px',
    transition: '1s',
    padding: '0 10px 5px 10px',
};

export { SearchNotes };
