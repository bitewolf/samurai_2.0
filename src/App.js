import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import Music from './Music'
import News from './News'
import Settings from './../src/components/Setting/Setting'
import { Component } from 'react'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import Preloader from './components/Common/Preloader/Preloader'


class App extends Component {
  
  componentDidMount() {
    this.props.initializeApp()
  }

  render(){

      if (!this.props.initialized) {
        return <Preloader/>
      }
        return (
          <BrowserRouter>
            <div className='app-wrapper'>
              <HeaderContainer />
              <Navbar />
              <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
              </div>
            </div>
          </BrowserRouter>
        )
  } 
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)