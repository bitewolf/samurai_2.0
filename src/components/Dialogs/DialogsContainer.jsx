
import React from 'react'
import { sendMessageCreator, updatenewMessageTextCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
                (store) => {
                    
                    let state = store.getState()
                    
                    let addMessage = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (newMessageText) => {
                        store.dispatch(updatenewMessageTextCreator(newMessageText))
                    }
                
                   return <Dialogs updatenewMessageTextCreator={onNewMessageChange}
                                    sendMessage={addMessage}
                                        messagesPage={state.messagesPage}/>
                }
            }
            
        </StoreContext.Consumer>
    
}
export default DialogsContainer