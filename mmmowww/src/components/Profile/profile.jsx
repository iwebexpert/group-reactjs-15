import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAILTURE} from "action/profile";


import { profile } from "../actions/profile";
constructor(props){
        super(props);

            this.state = {
                items: [],
                isLoaded: false
            };
    }
    actions.profile();
    componentDidMount() {
            fetch('api/profile')
                .then(results => results.json())
                .then(json => {
                        this.setState({
                            isLoaded: true,
                            items: json                           
                        })
                    });
                }


    handleSendMessage = (message) => {
        const {sendMessage, chatId} = this.props;

        sendMessage({
            ...message,
            chatId,
        });
    };

 render() {

                let {
                    isLoaded,
                    items
                } = this.state;
                if (!isLoaded) {
                    return <div> Loading... </div>
                } else {
                    return ( <div>
                        <ul>
                            {items.list.map((item, key) => (
                                <li key="{key}">
                                    test: {item.main.temp}
                                </li>
                            ))}
                        </ul> 
                        </div>
                    );
                };
              };