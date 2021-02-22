const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messagesData: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'Ololo'},
      {id: 3, message: 'buy'}
    ],
    dialogsData: [
    {id: 1,name: 'Dimych'},
    {id: 2,name: 'Andr'},
    {id: 3,name: 'Sveta'},
    {id: 4,name: 'Igor'},
    {id: 5,name: 'Tnya'},
    {id: 6,name: 'Petya'}
    ],
    newMessageText:''
}

const dialogsReducer = (state = initialState, action) => {
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