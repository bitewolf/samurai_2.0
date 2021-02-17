import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
    let message = newMessageElement.current.value
    alert(message)
}
    let dialogsElements = props.state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messagesData.map ( s => <Message message={s.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messagesElements}
                
                <textarea ref={newMessageElement}></textarea>
                <div className={s.buttons}>
                    <button onClick = {addMessage}>Add post</button>
                    <button>remove</button>
                </div>       
            </div>
        </div>
    )
}
export default Dialogs