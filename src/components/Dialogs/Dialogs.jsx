import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messagesData.map ( s => <Message message={s.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messagesElements}
 </div>
        </div>
    )
}
export default Dialogs