import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

class Users extends React.Component {

    constructor (props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render = () => {
        return <div>
            {
                this.props.users.map(user => <div key={user.id} id={user.id} className={classes.user}>
                    <div>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.img} alt=''/>
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </div>
                </div>)
            }
        </div>
    };
}

export default Users;
