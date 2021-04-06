import './dashboard.css';
import { AccountBox, Note } from '@material-ui/icons';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import { NoteController } from '../notes/NoteController';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FriendController } from '../friends/FriendController';

function DashboardPage(): JSX.Element {
    const { path, url } = useRouteMatch();
    const authState = useContext(UserContext);

    return (
        <div className="dashboardRoot">
            <div className="sidebar">
                <img src={logo} className="logo" alt="Logo" />
                <p className="usernameparagraph">
                    Username: {authState.username}
                </p>
                <NavLink
                    to={`${url}`}
                    exact
                    activeClassName="selectedLink"
                    className="btnNavigation"
                >
                    <Note />
                    <p className="textNavigation">Notes</p>
                </NavLink>
                <NavLink
                    to={`${url}/friends`}
                    exact
                    activeClassName="selectedLink"
                    className="btnNavigation"
                >
                    <AccountBox />
                    <p className="textNavigation">Friends</p>
                </NavLink>
            </div>
            <div className="divContent">
                <Switch>
                    <Route exact path={path}>
                        <NoteController />
                    </Route>
                    <Route path={`${path}/friends`}>
                        <FriendController />
                    </Route>
                </Switch>
            </div>
            <div></div>
        </div>
    );
}

export { DashboardPage };
