import React from 'react';
import classNames from 'classnames';

import {Header} from 'components/Header';
import {Messenger} from 'components/Messenger';
import {ChatList} from 'components/ChatList';



import './Layout.scss';

export class Layout extends React.Component {

    render() {

        return (
            <div>

             <Header />,

                <div className="container">
                    <ChatList />,
                    <Messenger />,
                </div>
             
            </div>

        );
    }
}