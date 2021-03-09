import { connect } from 'react-redux'
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer'
import axios from 'axios'
import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'

class UsersCntainer extends React.Component {
    
    componentDidMount() {
        
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {"API-KEY": "4680416d-3047-4d9b-afcc-e761f9d399f7"}
    })
            .then (response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
       this.props.setCurrentPage(pageNumber)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then (response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
        
        /></>
        }
    }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UsersCntainer)