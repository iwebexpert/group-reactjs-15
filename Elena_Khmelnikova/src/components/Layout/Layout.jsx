import React from 'react';

import { ChatsRedux } from 'containers/ChatsContainer';
import { HeaderRedux } from 'containers/HeaderContainer';
import { MessengerRedux } from 'containers/MessengerContainer';

import './Layout.less';

export class Layout extends React.Component {
    render() {
        const chatId = this.props.match.params.id;

        return (
            <div className={'container'}>
                <ChatsRedux chatId={chatId}/>
                <div className={'main-content'}>
                    <HeaderRedux/>
                    <MessengerRedux chatId={chatId}/>
                </div>
            </div>
        );
    }
}
