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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_TEXT:
            return {...state, newMessageBody: action.body}

        case SEND_MESSAGE: 
            let body = action.newMessageBody
            return {...state, messagesData: [...state.messagesData, {id: 6, message: body}]}
                    
        default:
            return state
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const updatenewMessageTextCreator = (body) =>
({type: UPDATE_NEW_MASSAGE_TEXT, body: body})

export default dialogsReducer