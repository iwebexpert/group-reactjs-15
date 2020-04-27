import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const API = {
    getChats() {
        return instance.get('/chats', {
            headers: {'Authorization': `Bearer ${localStorage.token}`
        },})
    },
    getMessages() {
        return instance.get('/messages').then(response => response.data)
    },
    sendMessage(message, id, authorId) {
        return instance.post(`/messages/${id}`,{message, authorId}).then(response => response.data)
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
    signUp(user) {
        return instance.post('/auth/signup', {...user})
    },
}