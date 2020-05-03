import React from 'react';

import { Chats } from '../Chats';
import { Header } from '../Header';
import { Messenger } from '../Messanger';

import './Layout.less';

export class Layout extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <Chats/>
                <div className={'main-content'}>
                    <Header/>
                    <Messenger id={this.props.match.params.id}/>
                </div>
            </div>
        );
    }
}
