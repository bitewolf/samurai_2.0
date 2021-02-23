
import React from 'react'
import { sendMessageCreator, updatenewMessageTextCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState()
    
    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (newMessageText) => {
        props.store.dispatch(updatenewMessageTextCreator(newMessageText))
    }

    return (
        <Dialogs updatenewMessageTextCreator={onNewMessageChange} sendMessage={addMessage} messagesPage={state.messagesPage}/>
    )
}
export default DialogsContainer