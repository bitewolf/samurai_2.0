import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
 
const Message = (props) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
        
    )
}
 

const Dialogs = (props) => {

    let dialogs = [
        {id: 1,name: 'Dimych'},
        {id: 2,name: 'Andr'},
        {id: 3,name: 'Sveta'},
        {id: 4,name: 'Igor'},
        {id: 5,name: 'Tnya'},
        {id: 6,name: 'Petya'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 4, message: 'Wats up?'},
        {id: 5, message: 'Heh)))'},
        {id: 6, message: 'Hmm...'}
    ]

    let dialogsElement = dialogs
    .map( d => <DialogItem name={d.name} id={d.id} />)
   
    let messagesElement = messages
    .map ( m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}



export default Dialogs