import { authAPI } from "../api/api"

const SET_USER_DATA = 'samurai-network/aith/SET_USER_DATA'
const SET_ERROR = 'samurai-network/aith/SET_ERROR'

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    errorCod: 0,
    errorName: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_ERROR:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userID, email, login, isAuth}})
export const setErrors = (errorCod, errorName) => ({type: SET_ERROR, payload: {errorCod, errorName}})

export const getAuthUserData = () =>  async (dispatch) => {
        let response = await authAPI.me()    
        
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                }               
            
     
    }

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)    
                if (response.resultCode === 0) {
                    dispatch(getAuthUserData())
                } 
                else {
                   let errorCod = response.resultCode
                   let errorName = response.messages[0]
                   dispatch(setErrors(errorCod, errorName))
               }
    }

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()    
       
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            
    }

export default authReducer