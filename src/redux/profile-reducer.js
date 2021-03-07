const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
    {id: 1, message: 'Hi, how are u', likesCount: 15},
    {id: 2, message: 'I am trololo', likesCount: 2},
    {id: 3, message: 'azaza', likesCount: 101}
  ],
    newPostText: '123',
    profile: null}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_POST: 
            return {...state, postData: [...state.postData, {id: 5, message: state.newPostText, likesCount: 23.34}], newPostText: ''}
             
        case UPDATE_NEW_TEXT_POST: {
            return {...state, newPostText: action.newText}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text})

export default profileReducer