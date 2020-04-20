import * as axios from 'axios'

export const API = {
    getChats() {
        return axios.get('http://localhost:3000/api/chats').then(response => response.data)
    },
    getMessages() {
        return axios.get('http://localhost:3000/api/messages').then(response => response.data)
    },
}