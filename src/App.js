import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
/*
//Here we're going to write custom functionality
***Increment - is a function that will allow us to increment the Counter
***Decrement - is a function that will allow us to decrement the Counter
*/

Increment = () => {
  // Your code goes here
  this.setState ({
    count: this.state.count + 1
  })
}

Decrement = () => {
  //Your code goes here
  this.setState ({
    count: this.state.count - 1
  })
}



  render () {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
          <div className="counter">
            <h1>{this.state.count}</h1>
            <button type="button" onClick = {this.Increment}>Increment</button>
            <button type="button" onClick = {this.Decrement}>Decrement</button>
            <button type="button" onClick = {this.Decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter;
