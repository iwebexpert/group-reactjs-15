import React from 'react';
import {Link} from 'react-router-dom';

import './ChatHeader.sass';

import {isEmpty} from '../../utils/common';

export class ChatHeader extends React.Component{
	
	

	
	render(){
		
		const ProfileIcon = () => {
			if(!isEmpty(profile.data)){
				return (
					<Link 
						to="/profile"
						className="chat__header_link"
						>
						{profile.data.login.username}
					</Link>
				);
			}else{
				return <div>NoName</div>
			}
		}
		const profile = this.props.profile;
		return (
			<div className="chat__header">
				<h3>
					Chat Room with <b>Greezlee</b>
				</h3>
				<ProfileIcon />
			</div>
		)
	}
}