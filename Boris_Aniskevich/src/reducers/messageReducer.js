import { API } from '../api/api'

const SET_MESSAGES = 'SET_MESSAGES'
const IS_LOADING_TOGGLE = 'IS_LOADING_TOGGLE' 

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
        default: return state
    }
}

const setMessages = payload => ({type: SET_MESSAGES, payload})
const setIsLoading = payload => ({type: IS_LOADING_TOGGLE, payload})

export const getMessages = () => dispatch => {
    dispatch(setIsLoading(true))
    API.getMessages().then(data => {
        dispatch(setMessages(data))
        dispatch(setIsLoading(false))
    })
}

export default messageReducer