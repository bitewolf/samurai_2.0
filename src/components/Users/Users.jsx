import React from 'react'
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers ( [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWIKwaojpneN3qgoL7Ec2xT4EcwjbQ8ImQ&usqp=CAU', followed: false, fullName:'Dmitry', status: 'I am boss', location: {city: 'Minsk', country: 'BLR'}},
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWIKwaojpneN3qgoL7Ec2xT4EcwjbQ8ImQ&usqp=CAU', followed: true, fullName:'Andrey', status: 'I am boss 2', location: {city: 'Braslav', country: 'BLR'}},
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWIKwaojpneN3qgoL7Ec2xT4EcwjbQ8ImQ&usqp=CAU', followed: false, fullName:'Petya', status: 'I am boss 3', location: {city: 'Piter', country: 'RU'}},
        {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWIKwaojpneN3qgoL7Ec2xT4EcwjbQ8ImQ&usqp=CAU', followed: true, fullName:'Vitaly', status: 'I am boss 4', location: {city: 'Vinnica', country: 'UA'}}
    
        ])
    }
    
    
    return (
    <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div><div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
    )
}

export default Users