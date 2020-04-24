import React from 'react';

export class App extends React.Component {

	state = {
		counter: 0,
	};

	handlerPlusClick = (event) => {
		this.setState((prevState) => ({
			counter: prevState.counter + 1
		}), () => {
			console.log('State updated!')});
	};

	handlerMinusClick = (event) => {
		const {counter} = this.state;
		this.setState({counter: counter - 1});
	};

	componentDidMount() {
		console.log('componentDidMount()');
	}

	componentWillUnmount() {

	}

	render() {
		return (
				<div>
					<h1>App component</h1>
					<div>Count: {this.state.counter}</div>
					<button onClick={this.handlerPlusClick}>+1</button>
					<button onClick={this.handlerMinusClick}>-1</button>
				</div>
		);
	}
}