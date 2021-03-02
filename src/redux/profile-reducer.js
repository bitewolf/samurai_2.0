const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'

let initialState = {
    postData: [
    {id: 1, message: 'Hi, how are u', likesCount: 15},
    {id: 2, message: 'I am trololo', likesCount: 2},
    {id: 3, message: 'azaza', likesCount: 101}
  ],
    newPostText: '123'}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_POST: 
            return {...state, postData: [...state.postData, {id: 5, message: state.newPostText, likesCount: 23.34}], newPostText: ''}
             
        case UPDATE_NEW_TEXT_POST: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text})

export default profileReducer