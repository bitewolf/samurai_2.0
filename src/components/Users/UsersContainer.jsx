import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersCntainer extends React.Component {
    
    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }
    
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

      
    } 

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
        
        /></>
        }
    }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:  state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleFollowingProgress, getUsers: getUsersThunkCreator}) (UsersCntainer)