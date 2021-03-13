import Profile from './Profile'
import { getId, setUserProfile } from '../../redux/profile-reducer'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

  componentDidMount() {
    
    this.props.getId(this.props.match.params.userId)
   
  }

  render () {
    
      return (
          <Profile {...this.props}
          profile = {this.props.profile}
          getId = {this.props.getId}
         
         />
      )
    }   
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter (ProfileContainer)

export default connect(mapStateToProps,
  {getId, setUserProfile}) (withUrlDataContainerComponent)
