//TODO: Middleware - ответ бота
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { createStore , applyMiddleware , compose } from 'redux' ;
import middlewares from '../middlewares' ;


import { SEND_MESSAGE } from "../actions/chats" ;
     export default store => next => (action) => {
          switch (action. type ) {
             case SEND_MESSAGE:
                if (action. sender === 'me' ) {
                	setTimeout (() => store. dispatch (sendMessage 
                		(Object.keys (
                			store.getState().messageReducer.messages).length+1,
                                'Не приставай ко мне, я робот!',
                                     'bot',
                               action.chatId )),
                                   1000)
                                              }
                                 }
                      return next(action)
                            }