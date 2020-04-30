import React from 'react';

import './message.sass';
import classNames from 'classnames';

export class Message extends React.Component{
	
	render(){
		const {post} = this.props;
		// console.log(post);
		const postClass = classNames('post', {
			'post__own': post.author === 'John',
			'post__others': post.author === 'bot'
		});
		const postAuthorClass = classNames('post__author', {
			'post__own_label': post.author === 'John',
		});
		return (
			<li className={postClass}>
				<b className={postAuthorClass}>{post.author}</b> 
				<p className="post__body">{post.text}</p>
			</li>
		)
	}
}