import React from 'react';
import {Link} from 'react-router-dom';
import { styled, makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import classNames from 'classnames';

import './ChatList.sass';
import {List, ListItem, ListItemText, ListItemIcon, Button} from '@material-ui/core';

// const ChatListEl = styled(List)({
// });
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
	opacity: 1,
	animationName: '$flashing',
	animationDuration: '1s',
	animationIterationCount: '50',
	
  },
  '@keyframes flashing': {
    from: {opacity: 0},
    to: {opacity: 1}
  }, 
}));

export class ChatList extends React.Component{
	
	state = {
		selected: null
	}
	UNSAFE_componentWillMount(){
		this.setState({selected: parseInt(this.props.id)});
	}
	componentDidUpdate(){
		// console.log('update', this.props.id);
		// const id = parseInt(this.props.id);
		// const {selected} = this.state;
		// if(selected !== id){
			
			// this.setState({selected: parseInt(this.props.id)});		
		// }
	}
	selectListItem = (e) => {
		// console.log('safsg',e.target);
		const {redirect} = this.props;
		const selectedItemIndex = parseInt(e.currentTarget.dataset.id);
		this.setState({selected: selectedItemIndex});
		redirect(selectedItemIndex);
	}
	render(){
		const {chats, id, addChat, redirect, deleteChat} = this.props;
		const {selected} = this.state;
		// console.log('chats', chats);
		const ChatListItem = ({chat, index}) => {
			// console.log('chat',chat, 'index', index);
			const classes = useStyles();
			return (
				<ListItem
					className={chat.flashing ? classes.root : ''}
					selected={selected === (index + 1)}
					data-id={index + 1}
					button
					onClick={this.selectListItem}
					>
					<ListItemText 
						>
						{chat.name}
					</ListItemText>
					<ListItemIcon
						onClick={deleteChat}
						data-id={index + 1}
						>
						<HighlightOffIcon
							/>
					</ListItemIcon>
				</ListItem>
				)
		}
		
		return (
			<div className="chat__list" >
				<List 
					component="nav">
					{
						chats.map((chat, index) => {
							// console.log('list index', index);
							return (
								<ChatListItem 
									key={index}
									chat={chat}
									index={index}
									/>
							)
						})
					}
				</List>
				<Button
					onClick={addChat}
					>
					new chat
				</Button>
			</div>
		);
	}
}
