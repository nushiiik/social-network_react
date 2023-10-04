import React from "react";
import classes from './Dialogs.module.css';
import User from "./User/User";
import Message from "./Message/Message";

function Dialogs(props) {

    let usersElements = props.dialogsPage.users.map( user => <User name={user.name} key={user.id} id={user.id} />);

    let messagesElements = props.dialogsPage.messages.map( message => <Message message={message.message} key={message.id}/>);


    let sendMessage = () => {
        props.sendMessage();
    }

    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.onChangeMessage(text);
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
                        <textarea placeholder='Enter new message' value={props.newMessageText} onChange={onChangeMessage}/>
                    </div>
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
