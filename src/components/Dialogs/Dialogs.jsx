import React from "react";
import classes from './Dialogs.module.css';
import User from "./User/User";
import Message from "./Message/Message";
import {sendMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogsReducer";

function Dialogs(props) {

    let usersElements = props.dialogsPage.users.map( user => <User name={user.name} id={user.id} />);

    let messagesElements = props.dialogsPage.messages.map( message => <Message message={message.message}/>);


    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.dispatch(onChangeMessageActionCreator(text));
    }

    return (
        <div className={classes.container}>
            <div className={classes.users}>
                { usersElements }
            </div>
            <div className={classes.messages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea placeholder='Enter new message' value={props.dialogsPage.newMessageText} onChange={onChangeMessage}/></div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
