import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" className = { navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
