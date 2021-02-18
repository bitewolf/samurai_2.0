import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Music from './Music'
import News from './News'
import Settings from './Settings'

const App = (props) => {
  
  return (
    
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbarPage}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />}/>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updNewPostText={props.updNewPostText}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App

