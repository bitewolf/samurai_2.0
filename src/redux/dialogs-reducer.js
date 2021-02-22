const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 6, message: newMessageText}) 
            return state
        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updatenewMessageTextCreator = (newMessageText) => ({type: UPDATE_NEW_MASSAGE_TEXT, newMessageText: newMessageText})

export default dialogsReducer