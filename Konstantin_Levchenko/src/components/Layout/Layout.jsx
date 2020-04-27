import React from 'react';

import {Header} from "../Header";
import NestedList from "../ChatList/NestedList";
import {Messenger} from "../Messenger";
import {Footer} from "../Footer";
import './Layout.css';

export class Layout extends React.Component {
    render() {
        return (
            <div className='layout'>
                <Header/>
                <div className='wrap'>
                    <NestedList/>
                    <Messenger/>
                </div>
                <Footer/>
            </div>
        );
    }
}