import * as axios from 'axios'

export const API = {
    getChats() {
        return axios.get('http://localhost:3000/api/chats').then(response => response.data)
    },
    getMessages() {
        return axios.get('http://localhost:3000/api/messages').then(response => response.data)
    },
    sendMessage(message, id) {
        return axios.post(`http://localhost:3000/api/messages/${id}`,{message: message,}).then(response => response.data)
    },
}