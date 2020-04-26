import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './Message.scss';

export class Message extends React.Component {

	static propTypes = {
		text: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		timestamp: PropTypes.string.isRequired,
	};

	render() {
		const {author, text, timestamp} = this.props;
		const classes = ClassNames('message', {
			'message-owner': author !== 'bot',
			'message-other': author === 'bot',
				}
		);

		return (
				<div className={classes}>
					<div className='message-timestamp'>{timestamp}</div>
					<span className={classes + '-author'}><b>{author}:</b> </span>
					<span>{text}</span>
				</div>
		);
	}
}