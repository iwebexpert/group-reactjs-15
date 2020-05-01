import { API } from 'api/api'

const SET_CHATS = 'SET_CHATS'
const IS_LOADING_TOGGLE = 'IS_LOADING_TOGGLE' 

const initialState = {
    chats: [],
    isLoading: false,
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHATS: 
            return {...state, chats: [...action.payload]}
        case IS_LOADING_TOGGLE: 
            return {...state, isLoading: action.payload}
        default: return state
    }
}

const setChats = payload => ({type: SET_CHATS, payload})
const setIsLoading = payload => ({type: IS_LOADING_TOGGLE, payload})

export const getChats = () => dispatch => {
    dispatch(setIsLoading(true))
    API.getChats().then(response => response.data).then(data => {
        dispatch(setChats(data.chats))
        dispatch(setIsLoading(false))
    })
}

export const createChat = data => dispatch => {
    dispatch(setIsLoading(true))
    return API.createChat(data).then(response => response.data).then(data => {
        dispatch(setChats(data.chats))
        dispatch(setIsLoading(false))
    })
}

export default chatReducer