
import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator, updatenewMessageTextCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatenewMessageTextCreator: (newMessageText) => {
            dispatch(updatenewMessageTextCreator(newMessageText))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer