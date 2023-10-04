import React from "react";
import classes from './Profile.module.css';
import Info from "./Info/Info";
import Banner from "./Banner/Banner";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {

    return (
        <div className={classes.container}>
            <Banner />
            <Info />
            <PostsContainer store={props.store} />
        </div>
    );
}

export default Profile;
