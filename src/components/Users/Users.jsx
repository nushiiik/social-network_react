import React from "react";
import classes from './Users.module.css';

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://wildfauna.ru/wp-content/uploads/2019/09/britanskaja-zolotaja-shinshilla-10.png',
                followed: true,
                fullName: 'Anna',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://wildfauna.ru/wp-content/uploads/2019/09/britanskaja-zolotaja-shinshilla-10.png',
                followed: false,
                fullName: 'Aragorn',
                status: 'I am a Junior',
                location: {city: 'Gondor', country: 'Middle Earth'}
            },
            {
                id: 3,
                photoUrl: 'https://wildfauna.ru/wp-content/uploads/2019/09/britanskaja-zolotaja-shinshilla-10.png',
                followed: true,
                fullName: 'Anton',
                status: 'I am a Senior',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }

    return (
        props.users.map(user => <div key={user.id} id={user.id}>
            <div className={classes.container}>
                <div className={classes.user}>
                    <div>
                        <img src={user.photoUrl} className={classes.avatar} alt=''/>
                    </div>
                    <div>
                        { user.followed
                            ? <button onClick= {() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick= {() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={classes.info}>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                </div>
            </div>
        </div>)
    );
}

export default Users;
