import classes from "./User.module.css";
import {NavLink} from "react-router-dom";

function User(props) {
    return (
        <div className={classes.user}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default User;
