const SEND_MESSAGE = 'SEND-MESSAGE';
const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';

let initialState = {
    users: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Dima'}
    ],
    messages: [
        {id: 1, message: 'Hi! How are you?'},
        {id: 2, message: 'I am ok! And you?'},
        {id: 3, message: 'Very well'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: state.newMessageText}]
            };
        }
        case ON_CHANGE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onChangeMessageActionCreator = (text) => ({type: ON_CHANGE_MESSAGE, newMessage: text});

export default dialogsReducer;
