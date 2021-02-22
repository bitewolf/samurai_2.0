import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import React from 'react'
import { sendMessageCreator, updatenewMessageTextCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    
    let state = props.store.messagesPage
       
    let dialogsElements = state.dialogsData.map ( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map ( s => <Message message={s.message}/>)
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = () => {
        let newMessageText = newMessageElement.current.value
        props.dispatch(updatenewMessageTextCreator(newMessageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
             </div>
            <div className={s.messages}>
                {messagesElements}
                
                <textarea ref={newMessageElement} onChange = {onNewMessageChange} value = {props.store.messagesPage.newMessageText}></textarea>
                <div className={s.buttons}>
                    <button onClick = {addMessage}>Add post</button>
                    <button>remove</button>
                </div>       
            </div>
        </div>
    )
}
export default Dialogs