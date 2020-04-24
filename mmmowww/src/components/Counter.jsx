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

    handleButtonClick = (event) => {
        const action = +event.target.dataset.action;
        const {counter} = this.state;
        this.setState({counter: counter + action});
    };

    handleButtonClick2 = (action) => () => {
        const {counter} = this.state;
        this.setState({counter: counter + action});
    };

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log('Get data!');
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        console.log('render()');
        const {counter} = this.state;

        if(typeof(counter) === 'undefined'){
            return <div>Некорректное значение</div>;
        }

        return (
            <div>
                <h1>App component!</h1>
                <div>Count: {counter}</div>
            
                <button data-action="1" onClick={this.handleButtonClick}>+1</button>
                <button data-action="-1" onClick={this.handleButtonClick}>-1</button>
                <hr/>
                {/* Редко используется
                <button onClick={this.handleButtonClick2(1)}>+1</button>
                <button onClick={this.handleButtonClick2(-1)}>-1</button> */}
            </div>
        );
    }
}