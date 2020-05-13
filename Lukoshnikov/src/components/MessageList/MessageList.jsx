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
	render(){
		const {messages} = this.props;
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