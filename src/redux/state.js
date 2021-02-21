const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
  _state: {
    profilePage: {
        postData: [
        {id: 1, message: 'Hi, how are u', likesCount: 15},
        {id: 2, message: 'I am trololo', likesCount: 2},
        {id: 3, message: 'azaza', likesCount: 101}
      ],
        newPostText: '123'},
    messagesPage: {
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
    },
    navbarPage: {
        friends: [
          {id: 1, name: 'Kent', avatar: "https://html5css.ru/w3images/avatar2.png"},
          {id: 2, name: 'Brat', avatar: "https://html5css.ru/w3css/img_avatar3.png"},
          {id: 3, name: 'Chelik', avatar: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"}
        ]
      }
    },
  getState() {
    
    return this._state
  },
  _callSubsriber() {
      console.log("statechanged")
  },
  subscribe (observer) {
    this._callSubsriber = observer   
  },
  dispatch (action) {
    
      if (action.type === ADD_POST) {
        
        let newPost = {
          id: 5, message: this._state.profilePage.newPostText, likesCount: 23.34
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubsriber(this._state)
      } else if (action.type === UPDATE_NEW_TEXT_POST) {
        this._state.profilePage.newPostText = action.newText
        this._callSubsriber(this._state)
      } else if (action.type === UPDATE_NEW_MASSAGE_TEXT) {
        this._state.messagesPage.newMessageText = action.newMessageText
        this._callSubsriber(this._state)
      } else if (action.type === SEND_MESSAGE) {
        let newMessageText = this._state.messagesPage.newMessageText
        this._state.messagesPage.newMessageText = ''
        this._state.messagesPage.messagesData.push({id: 6, message: newMessageText})
        this._callSubsriber(this._state)
        
      }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updatenewMessageTextCreator = (newMessageText) => ({type: UPDATE_NEW_MASSAGE_TEXT, newMessageText: newMessageText})

export default store
window.store = store