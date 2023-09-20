const ADD_POST = 'ADD-POST';
const ON_CHANGE_POST = 'ON-CHANGE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'First post'},
        {id: 2, message: 'Second post'},
        {id: 3, message: 'Third post'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 4, message: state.newPostText};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case ON_CHANGE_POST:
            state.newPostText = action.newPost;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const onChangePostActionCreator = (text) => ({type: ON_CHANGE_POST, newPost:text});

export default profileReducer;
