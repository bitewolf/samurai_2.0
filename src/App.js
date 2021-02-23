import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import DialogsContainer from './components/Dialogs/DialogsContainer'
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
        <Navbar state={props.store}/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
          <Route path='/profile' render={() => <Profile store={props.store}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  )
  
}

export default App

