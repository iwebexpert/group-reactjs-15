import React from 'react';

export class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
        };
    }
    handlePlusClick = (event) =>{
        //this.state.counter++;
        //this.forceUpdate();
        ///
        //this.setState({counter: this.state.counter + 1})
        /////
        // надежн
        //this.setState((prevState) => ({
        //    counter: prevState.counter + 1
        //}))
        ////////
        const {counter} = this.state;
        this.setState({counter: counter + 1});
        //setInterval(handlePlusClick, 1000);
        
    }

    render(){
        console.log('render()');
        return (
            <div>
                <h1>App component!</h1>
        <div>Count: {this.state.counter}</div>
        {/* <button onClick={this.handlePlusClick.bind(this)}>+1</button> */}
        <button onClick={this.handlePlusClick.bind(this)}>+1</button>
        
        {/* <button onClick={() => {this.handleMinusClick()}}>-1</button> */}
            </div>
        );
    }
}