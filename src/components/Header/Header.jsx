import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IMG_logo_%282017%29.svg/1200px-IMG_logo_%282017%29.svg.png' alt="текст"></img>
            <div className={s.loginBlock}>
                {props.isAuth
                ? <div>{props.login}<button onClick={props.logout}>logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header