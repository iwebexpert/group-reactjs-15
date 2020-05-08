import React from 'react';
import PropTypes from 'prop-types';
import {MessengerRedux} from 'containers/MessengerContainer';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';

import {Message, messageType} from 'components/Message';
import './MessageList.css'

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: MessengerRedux,
    },
    
    {
        path: '*',
        component: PageNotFound,
    }
];

export class MessageList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType),
        ),
    };
    handleRedirect(){
        
    }

    render(){
        const {items} = this.props;

        return (
            <div className="messages-list">
                {items.map((item, index) => <Message key={index} {...item} />)}
            </div>
        );
    }
}

// Возможно дополнить


