import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const API = {
    getChats() {
        return instance.get('/chats', {
            headers: {'Authorization': `Bearer ${localStorage.token}`},
        })
    },
    getMessages() {
        return instance.get('/messages/', {
            headers: {'Authorization': `Bearer ${localStorage.token}`},
        })
    },
    createChat(user) {
        return instance.request({
            url: `/chats/${user}`, 
            method: 'post', 
            headers: {'Authorization': `Bearer ${localStorage.token}`}
        })
    },
    deleteChat(chatId) {
        return instance.delete(`/chats/${chatId}`, {
            headers: {'Authorization': `Bearer ${localStorage.token}`},
        })
    },
}

export const userAPI = {
    checkAuth() {
        return instance.get('/auth', {
            headers: {'Authorization': `Bearer ${localStorage.token}`},
        })
    },
    login(user) {
        return instance.post('/auth', {...user})
    },
    signUp(user) {
        return instance.post('/auth/signup', {...user})
    },
    getContacts() {
        return instance.get('/users/contacts', {
            headers: {'Authorization': `Bearer ${localStorage.token}`},
        })
    },
}

//return instance.request({url: '/auth', method: 'post', headers: {}, data: {...user}})