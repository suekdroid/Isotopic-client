import './navigation.css';
import Note from '@material-ui/icons/NoteOutlined';
import { alignedIcon, flexRow } from '../../style/SharedStyles';
import { ThemeSwitch } from './ThemeSwitch';

function Navbar(): JSX.Element {
    return (
        <div className="navBarComponent navigationBarTheme">
            <div style={flexRow}>
                <Note style={alignedIcon} />
                <h1>Isotopic</h1>
            </div>
            <ThemeSwitch />
        </div>
    );
}

export { Navbar };
