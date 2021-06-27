import Profile from './Profile'
import { getId, setUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  
  componentDidMount() {
    
    let userId = this.props.match.params.userId
    if (!userId)
    { userId = this.props.userID
      if (!userId) {
        this.props.history.push("/login")
    }}

    this.props.getId(this.props.userID)
    this.props.getStatus(this.props.userID)
  }

  render () {
    
      return (
          <Profile {...this.props}
          profile = {this.props.profile}
          getId = {this.props.getId}
          status = {this.props.status}
          updateStatus = {this.props.updateStatus}
         />
      )
    }   
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userID: state.auth.userID,
  isAuth: state.auth.isAuth

})

export default compose(
  connect(mapStateToProps,
    {getId, setUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)