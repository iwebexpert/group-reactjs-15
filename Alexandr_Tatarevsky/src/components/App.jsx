import React from 'react';
import PropTypes from 'prop-types';

export class App extends React.Component{
    state = {
        counter: 0,
    };

    handlePlusClick = (event) => {
        this.setState({counter: this.state.counter + 1})
    };

    render(){
        return (<div>
            <h1>App component</h1>
            <div>Count: {this.state.counter}</div>
            <button onClick={this.handlePlusClick.bind(this)}>+1</button>
        </div>);
    }
}