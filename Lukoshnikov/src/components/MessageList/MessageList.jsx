import React from 'react';

import './messagelist.sass';
import {Message} from '../Message';

import scrollTo from '../../utils/scrollref';


export class MessageList extends React.Component{
	
	listEnd = React.createRef();
	
	componentDidMount(){
		scrollTo(this.listEnd);
	}
	componentDidUpdate(){
		scrollTo(this.listEnd);
	}
	renderMessageList(messages){
		return 	(
			<div>
				<ul className="posts__list">
					{
						messages.map((post, index) => {
							return <Message post={post} key={index}/>;
						})
					}
					<li ref={this.listEnd}></li>
				</ul>
				
			</div>
		);
	}
	renderEmptyList(){
		return 	(
			<div>
				<ul className="posts__list">
					<li>Выберите чат</li>
				</ul>
				
			</div>
		);
	}
	render(){
		const {messages} = this.props;
		// const count = messages.length;
		// return (<div>{count? renderMessageList : renderEmptyList}</div>)
		return (
			<div>
				<ul className="posts__list">
					{
						messages.map((post, index) => {
							return <Message post={post} key={index}/>;
						})
					}
					<li ref={this.listEnd}></li>
				</ul>
				
			</div>
		)
	}
}