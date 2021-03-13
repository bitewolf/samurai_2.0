import Profile from './Profile'
import { getId, setUserProfile } from '../../redux/profile-reducer'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.getId(this.props.match.params.userId)
   
  }

  render () {
      if (!this.props.isAuth) return <Redirect to={"/login"} />
    
      return (
          <Profile {...this.props}
          profile = {this.props.profile}
          getId = {this.props.getId}
         
         />
      )
    }   
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect(mapStateToProps,
  {getId, setUserProfile}) (withUrlDataContainerComponent)
