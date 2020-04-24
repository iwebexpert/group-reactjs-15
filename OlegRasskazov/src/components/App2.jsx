import React from 'react';

import {Counter} from "./Counter";

export class App2 extends React.Component {

	state = {
		isVisible: true,
	};

	handleToggle = () => {
		this.setState({
			isVisible: !this.state.isVisible,
		});
	};

	render() {
		const {isVisible} = this.state;
		return (
				<div>
					<h1>Counter</h1>
					{isVisible && <Counter />}
					<button onClick={this.handleToggle}>Show / Hide</button>
				</div>
		)
	}

}