import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
	static propTypes = {
		initialValue: PropTypes.number.isRequired,
	};

	static defaultProps = {
		initialValue: 1000,
	};

	state = {
		counter: this.props.initialValue,
	};

	interval = null;

	handlerButtonClick = (event) => {
		const action = +event.target.dataset.action;
		const {counter} = this.state;
		this.setState({counter: counter + action});
	};

	componentDidMount() {
		this.interval = setInterval(() => {
			console.log('Get data!');
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const {counter} = this.state;

		return (
				<div>
					<h1>App component</h1>
					<div>Count: {counter}</div>

					<button data-action="1" onClick={this.handlerButtonClick}>+1</button>
					<button data-action="-1" onClick={this.handlerButtonClick}>-1</button>
				</div>
		);
	}
}