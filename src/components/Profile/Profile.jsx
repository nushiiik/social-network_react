import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import Info from "./Info/Info";
import Banner from "./Banner/Banner";

function Profile(props) {

    return (
        <div className={classes.container}>
            <Banner />
            <Info />
            <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
