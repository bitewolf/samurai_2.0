import React from 'react'
import Paginator from '../Common/Paginator/Paginator'
import User from './User'

let Users = ({totalUsersCount, pageSize, currentPage, selectedPage, onPageChanged, users, ...props}) => {

     return <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} selectedPage={selectedPage} onPageChanged={onPageChanged}/>
            <div>
            {users.map( u => <User user={u}
                                followingInProgress={props.followingInProgress}
                                follow={props.follow} unfollow={props.unfollow} key={u.id} /> 
            )
            }
            </div>
        </div>
        
}

export default Users