import React from 'react';

import {Message} from './Message';

export class MessageList extends React.Component{
	
	render(){
		const 	{messages} = this.props;
		// console.log(messages);
		return 	(
			<div>
				<ul>
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