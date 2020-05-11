import React from 'react';

import './ProfileContent.sass';

import {isEmpty} from '../../utils/common';

export class ProfileContent extends React.Component{
	
	componentDidMount(){
		this.props.loadProfile();
	}
	
	render(){
		// const title = pd.name.title;
		// console.log((this.props.profile.data));
		if(!isEmpty(this.props.profile.data)){
			const pd = this.props.profile.data;
			const {title, first, last} = pd.name;
			if(this.props.profile.loading){
				return (
					<div>Loading...</div>
				)
			}else{
				return (
					<div>
						<h3>
							{title} {first} {last} ({pd.login.username})
						</h3>
						<p>
						<b>{pd.location.country}</b>
						</p>
						<img src={pd.picture.medium} />
						<h4>
							Contacts:
						</h4>
						<p>
							<b>phone</b>: {pd.phone}
						</p>
						<p>
							<b>email</b>: {pd.email}
						</p>
						
					</div>
				)
			}
			if(this.props.profile.error){
				return (
					<div></div>
				)
			}
		}
		return <div></div>
	}
}
						// {` ${pd.name.title} ${pd.name.first} ${pd.name.last}`}
