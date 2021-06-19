import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const READ_ID = 'READ_ID'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postData: [
    {id: 1, message: 'Hi, how are u', likesCount: 15},
    {id: 2, message: 'I am trololo', likesCount: 2},
    {id: 3, message: 'azaza', likesCount: 101}
  ],
    profile: null,
    status: '',
    id: 2}
    

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_POST: return {...state, postData: [...state.postData, {id: 5, message: action.newPostText, likesCount: 23.34}], newPostText: ''}
             
        case SET_USER_PROFILE: return {...state, profile: action.profile}
        
        case SET_STATUS: return {...state, status: action.status}
        
        case READ_ID: return {...state, id: action.id}
        
        case DELETE_POST: return {...state, postData: state.postData.filter(p => p.id != action.postId)}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const readId = (id) => ({type: READ_ID, id})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getId = (userId) => { 
    return (dispatch) => {
        usersAPI.getId(userId)
        .then (data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId) => { 
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then (data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => { 
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then (data => {
            if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
        })
    }
}

export default profileReducer
