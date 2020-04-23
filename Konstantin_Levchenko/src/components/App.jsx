import React from 'react';

// export default class App extends React.Component {
export class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0, // Хранилище данных
    //     }
    //     // this.handlePlusClick = this.handlePlusClick.bind(this);
    //     // this.handleMinusClick = this.handleMinusClick.bind(this);
    // }

    state = {
        counter: 0,
    }

    handlePlusClick = (event) => {
        // this.state.counter++;
        // this.forceUpdate(); // не использовать

        // Вариант 1 - не гарантируется консистентность
        // this.setState({counter: this.state.counter + 1});

        // Вариант 2 - надежный
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }), () => {
            console.log('state updated!')
        })
    };

    // handleMinusClick(event) {
    //     const {counter} = this.state
    //     this.setState({counter: counter - 1});
    //     // this.setState({counter: this.state.counter - 1});
    // };

    handleMinusClick = (event) => {
        const {counter} = this.state
        this.setState({counter: counter - 1});
        // this.setState({counter: this.state.counter - 1});
    };

    // Deprecated
    // componentWillMount() {
    //     console.log('componentWillMount()');
    // }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render() {
        // return <div><h1>Hello!</h1></div>;
        console.log('render()');
        return (
            <div>
                <h1>App component</h1>
                <div>Count: {this.state.counter}</div>
                {/*<button onClick={this.handlePlusClick.bind(this)}>+1</button>*/}
                <button onClick={this.handlePlusClick}>+1</button>
                <button onClick={this.handleMinusClick}>-1</button>
                {/*<button onClick={() => {this.handleMinusClick()}}>-1</button>*/}
            </div>
        );
    }
}