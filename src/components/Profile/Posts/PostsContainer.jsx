import React from 'react';
import {addPostActionCreator, onChangePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";

function PostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangePost = (body) => {
        props.store.dispatch(onChangePostActionCreator(body));
    }

    return < Posts addPost={addPost} onChangePost={onChangePost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>;
}

export default PostsContainer;
