import { reset } from 'redux-form'

import { API } from 'api/api'

const SET_MESSAGES = 'SET_MESSAGES'
const IS_LOADING_TOGGLE = 'IS_LOADING_TOGGLE' 
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    messages: {},
    isLoading: false,
}

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGES: 
            return {...state, messages: {...action.payload}}
        case IS_LOADING_TOGGLE: 
            return {...state, isLoading: action.payload}
        case SEND_MESSAGE:
            return {...state, messages: {...action.payload}}
        default: return state
    }
}

const setMessages = payload => ({type: SET_MESSAGES, payload})
const setIsLoading = payload => ({type: IS_LOADING_TOGGLE, payload})
const pushMessage = payload => ({type: SEND_MESSAGE, payload})

export const getMessages = () => dispatch => {
    dispatch(setIsLoading(true))
    API.getMessages().then(data => {
        dispatch(setMessages(data))
        dispatch(setIsLoading(false))
    })
}

export const sendMessage = data => dispatch => {
    dispatch(pushMessage(data))
    dispatch(reset('sendMessage'))
}

export default messageReducer