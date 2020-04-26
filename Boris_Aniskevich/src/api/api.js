import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const API = {
    getChats() {
        return instance.get('/chats').then(response => response.data)
    },
    getMessages() {
        return instance.get('/messages').then(response => response.data)
    },
    sendMessage(message, id) {
        return instance.post(`/messages/${id}`,{message: message,}).then(response => response.data)
    },
}

export const userAPI = {
    checkAuth() {
        return instance.get('/auth', {
            headers: {'Authorization': `Bearer ${localStorage.token}`
        },})
    },
    login(user) {
        return instance.post('/auth', {...user})
    },
}