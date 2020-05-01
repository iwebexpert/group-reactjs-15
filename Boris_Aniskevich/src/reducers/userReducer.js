import { stopAsyncValidation } from 'redux-form'

import { userAPI } from 'api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const IS_LOADING_TOGGLE = 'IS_LOADING_TOGGLE' 
const SET_CONTACTS = 'SET_CONTACTS'

const initialState = {
    id: null,
    username: null,
    isLoading: false,
    isAuth: false,
    contacts: [],
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {...state, ...action.payload}
        case IS_LOADING_TOGGLE: 
            return {...state, isLoading: action.payload}
        case SET_CONTACTS: 
            return {...state, ...action.payload}
        default: return state
    }
}

const setUserData = payload => ({type: SET_USER_DATA, payload})
const setIsLoading = payload => ({type: IS_LOADING_TOGGLE, payload})
const setContacts = payload => ({type: SET_CONTACTS, payload})

export const getUserData = () => dispatch => {
    dispatch(setIsLoading(true))
    userAPI.checkAuth().then(response => response.data).catch(error => error.response.data).then(data => {
        if (+data.resultCode === 0) {
            dispatch(setUserData({...data.user, isAuth: true}))
        } 
        dispatch(setIsLoading(false))
    })
}

export const login = values => dispatch => {
    dispatch(setIsLoading(true))
    userAPI.login(values).then(response => response.data).catch(error => error.response.data).then(data => {
        if (+data.resultCode === 0) {
            localStorage.token = data.token
            dispatch(getUserData())
        } else if (+data.resultCode === 1) {
            dispatch(stopAsyncValidation('login', {_error: data.message}))
        }
    dispatch(setIsLoading(false))
    })
}

export const signUp = values => dispatch => {
    dispatch(setIsLoading(true))
    userAPI.signUp(values).then(response => response.data).catch(error => error.response.data).then(data => {
        if (+data.resultCode === 0) {
            localStorage.token = data.token
            dispatch(getUserData())
        } else if (+data.resultCode === 1) {
            dispatch(stopAsyncValidation('registration', {_error: data.message}))
        }
    dispatch(setIsLoading(false))
    })
}

export const logout = () => dispatch => {
    localStorage.token = ''
    dispatch(setUserData({id: null, username: null, isAuth: false}))
}

export const getContacts = () => dispatch => {
    dispatch(setIsLoading(true))
    userAPI.getContacts().then(response => response.data).catch(error => error.response.data).then(data => {
        if (+data.resultCode === 0) {
            dispatch(setContacts(data))
        } 
    dispatch(setIsLoading(false))
    })
}

export default userReducer