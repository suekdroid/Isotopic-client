import CSS from "csstype";
import Note from "@material-ui/icons/NoteOutlined";
import { alignedIcon, flexRow } from "../../style/SharedStyles";
import { ThemeSwitch } from "./ThemeSwitch";

function Navbar(): JSX.Element {
    return (
        <div style={navBarComponent} className="navigationBarTheme">
            <div style={flexRow}>
                <Note style={alignedIcon} />
                <h1>Ionium</h1>
            </div>
            <ThemeSwitch />
        </div>
    );
}

const navBarComponent: CSS.Properties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px 20px 10px 20px",
    alignItems: "center",
};

export { Navbar };
