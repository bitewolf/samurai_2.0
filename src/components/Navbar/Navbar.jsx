import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import Sidebar from './Sidebar/Sidebar'

const Navbar = (props) => {
    
    return (
        
        <div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>
            <Sidebar friends={props.state.getState().navbarPage}/>
        </div>
    )
}

export default Navbar
