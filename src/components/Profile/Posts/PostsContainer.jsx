import {addPostActionCreator, onChangePostActionCreator} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

/* function PostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onChangePost = (body) => {
        props.store.dispatch(onChangePostActionCreator(body));
    }

    return < Posts addPost={addPost} onChangePost={onChangePost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>;
} */

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (body) => {
            dispatch(onChangePostActionCreator(body));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
