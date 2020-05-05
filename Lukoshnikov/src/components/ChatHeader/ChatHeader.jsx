import React from 'react';
import {Link} from 'react-router-dom';

import './ChatHeader.sass';

export class ChatHeader extends React.Component{
	
	render(){
		const {profile} = this.props;
		return (
			<div className="chat__header">
				<h3>
					Chat Room with <b>Greezlee</b>
				</h3>
				<Link 
					to="/profile"
					className="chat__header_link"
					>
					{profile.name}
				</Link>
			</div>
		)
	}
}