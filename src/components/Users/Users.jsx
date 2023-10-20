import React from "react";
import classes from './Users.module.css';
import userPhoto from "../../assets/images/user.png"

function Users(props) {

    let pagesNumber = Math.ceil(props.countPages / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && classes.selectedPage}
                                     onClick={() => props.onPageChanged(p)}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id} id={user.id} className={classes.user}>
                    <div>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={classes.img} alt=''/>
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(user.id)
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
    );
}

export default Users;
