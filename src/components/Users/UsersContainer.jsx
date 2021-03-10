import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersCntainer extends React.Component {
    
    componentDidMount() {
        
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then (data => {
            
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        
        usersAPI.getUsers(pageNumber, this.props.pageSize).then (data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress}) (UsersCntainer)