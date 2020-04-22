import React from 'react';


export class Message extends React.Component{
	
	render(){
		const {post} = this.props;
		// console.log(post);
		return (
			<div>
				<li>
					{post.author}: {post.message}
				</li>
			</div>
		)
	}
}