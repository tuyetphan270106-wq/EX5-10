import { Component } from "react";

class DemoClass extends Component{
    constructor(props){
    super(props);
        this.state = { count: 0 };
}
    increase = () => {
        this.setState(
            { count: this.state.count + 5 }
        );
    };
    decrease = () => {
        this.setState(
            { count: this.state.count - 2 }

        );
    };
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.increase}>Tang</button>
            <button onClick={this.decrease}>Giam</button>
            </div>
        );
    }
}