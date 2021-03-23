import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { compose } from 'redux'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'


class UsersCntainer extends React.Component {
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
        followingInProgress={this.props.followingInProgress}
        /></>
        }
    }

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:  state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:  getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersCntainer)