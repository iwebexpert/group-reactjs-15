import React from 'react';

import './ChatHeader.sass';

export class ChatHeader extends React.Component{
	
	render(){
		
		return (
			<div className="chat__header">
				<h3>
					Chat Room with <b>Greezlee</b>
				</h3>
			</div>
		)
	}
}