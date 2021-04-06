import './input.css';
import { Search } from '@material-ui/icons';
import CSS from 'csstype';
import { pageWrapper } from '../../../style/SharedStyles';
import { TextInput } from './TextInput';

interface SearchInputProps {
    searchString: string;
    placeholder: string;
    onSearchButtonClick: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onSearchStringChanged: (searchString: string) => void;
}

function SearchInput(props: SearchInputProps): JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '10px',
            }}
        >
            <div style={createNoteStyle} className="colorInput">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextInput
                        inputType="text"
                        label=""
                        placeholder={props.placeholder}
                        value={props.searchString}
                        updateInput={(data: string) =>
                            props.onSearchStringChanged(data)
                        }
                        validationError={''} //REMEMBER
                    />
                    <button
                        className="btnIcon"
                        onClick={(e) => props.onSearchButtonClick(e)}
                    >
                        <Search className="iconMaterial coloricon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const createNoteStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '800px',
    borderRadius: '5px',
    transition: '1s',
    padding: '0 10px 5px 10px',
};

export { SearchInput };
