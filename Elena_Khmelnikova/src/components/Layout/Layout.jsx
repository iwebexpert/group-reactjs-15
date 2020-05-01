import React from 'react';

import { ChatList } from '../ChatList';
import { Header } from '../Header';
import { Messenger } from '../Messanger';

import './Layout.less';

export class Layout extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <ChatList/>
                <div className={'main-content'}>
                    <Header/>
                    <Messenger/>
                </div>
            </div>
        );
    }
}
