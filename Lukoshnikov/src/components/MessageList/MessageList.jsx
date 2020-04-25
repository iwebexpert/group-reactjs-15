import React from 'react';

import './messagelist.sass';
import {Message} from '../Message';


export class MessageList extends React.Component{
	
	render(){
		const 	{messages} = this.props;
		// console.log(messages);
		return 	(
			<div>
				<ul className="posts__list">
					{
						messages.map((post, index) => {
							// console.log(post);
							return <Message post={post} key={index}/>;
						})
					}
				</ul>
			</div>
		);
	}
}