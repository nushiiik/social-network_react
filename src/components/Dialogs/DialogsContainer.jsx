import React from "react";
import {sendMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onChangeMessage = (body) => {
        props.store.dispatch(onChangeMessageActionCreator(body));
    }

    return < Dialogs onChangeMessage={onChangeMessage} sendMessage={sendMessage} dialogsPage={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText}/>;
}

export default DialogsContainer;
