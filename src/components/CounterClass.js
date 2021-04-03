import React, { Component } from 'react'

export class CounterClass extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }
  
  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback value', this.state.count)
    // })
    this.setState(prevState => ({
      count: prevState.count + 1
      }))
    console.log(this.state.count)
  }

  incrementFive() {
    for(let i = 0; i<5; i++) {
    this.incrementCount()
    }
  }

    render() {
        return (
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={() => this.incrementFive()}>Increment count</button> 
            </div>
        )
    }
}

export default CounterClass

