import React from 'react';
import classNames from 'classnames';

import './Chat.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Messenger } from 'components/Messenger';



export class Chat extends React.Component {
    
    render(){
        const {chatname, active, unknownProps} = this.props;
        const classes = classNames('chat', {
            'chat-active': active === true,
            'chat-inactive': active === false,
        });

            // <div className={classes}>
            //     <div>{chatname}</div>
            //     <div className="">{unknownProps}что-нибудь</div>
            // </div>
        return (

            <div>

                <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary={chatname}
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className="chat-inline"
                    color="textPrimary"
                >
                    {unknownProps}
                </Typography>
                {'last message'}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        </div>
        );
    }
}