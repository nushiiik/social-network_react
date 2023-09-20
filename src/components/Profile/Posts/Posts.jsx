import React from 'react';
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, onChangePostActionCreator} from "../../../redux/profileReducer";

function Posts(props) {

    let postsElements = props.posts.map( post => <Post message={post.message} />);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = (event) => {
        let text = event.target.value;
        props.dispatch(onChangePostActionCreator(text));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.newPost}>
                <div>
                    <textarea placeholder='Enter new post' value={props.newPostText} onChange={onChangePost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.listPosts}>
                { postsElements }
            </div>
        </div>
    );
}

export default Posts;
