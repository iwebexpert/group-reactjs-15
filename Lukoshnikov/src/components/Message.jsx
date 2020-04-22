import React from 'react';


export class Message extends React.Component{
	
	render(){
		const {post} = this.props;
		// console.log(post);
		return (
			<li>
				<b>{post.author}</b>: {post.message}
			</li>
		)
	}
}