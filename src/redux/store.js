import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.navbarPage = sidebarReducer(this._state.navbarPage, action)
    this._callSubsriber(this._state)  
  }
}


export default store
window.store = store