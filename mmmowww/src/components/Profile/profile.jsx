import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAILTURE} from "action/profile";


import { profile } from "../actions/profile" ;
constructor(props){
        super(props);

            this.state = {
               profile: [    /// Тестовая заглушка \|/
                           {
                               chatName:'Работа',
                               author: 'Начальник',
                               text: 'Когда тебя ждать?',
                           },
                           {
                               chatName:'Семья',
                               author: 'Родитель',
                               text: 'Перезвони я волнуюсь',
                           },
                           {
                               chatName:'Жена',
                               author: 'Вы',
                               text: 'Я к обеду!',
                           },
                           {
                               chatName:'Муж',
                               author: 'Вы',
                               text: 'Я к ужину!',
                           },
                           {
                               chatName:'Дети',
                               author: 'Сын',
                               text: 'Завтра на рыбалку',
                           },

                     ],
                         };
    }
    actions.profile();
    componentDidMount(){
        const {loadChats, loadChats2,profile} = this.props;

        if(!this.props.chats.length){
            
            loadChats2();
            profile();
        }
    }

    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

return store ;

