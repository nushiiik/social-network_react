import {sendMessageActionCreator, onChangeMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/* function DialogsContainer(props) {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onChangeMessage = (body) => {
        props.store.dispatch(onChangeMessageActionCreator(body));
    }

    return <Dialogs onChangeMessage={onChangeMessage} sendMessage={sendMessage} dialogsPage={state.dialogsPage} newPostText={state.dialogsPage.newMessageText} />;
} */

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (body) => {
            dispatch(onChangeMessageActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
