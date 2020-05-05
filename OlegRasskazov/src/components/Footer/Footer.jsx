import React from 'react';

import './Footer.scss';

export class Footer extends React.Component {
	render() {
		return (
				<div className="layout-footer">
					<p>Copyright © {(new Date()).getFullYear()} Oleg Rasskazov</p>
				</div>
		);
	}
}