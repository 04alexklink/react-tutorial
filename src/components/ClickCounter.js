import React, { Component } from 'react'

class ClickCounter extends Component {
    
    render() {
        const count = this.props.clickCount
      return <button onClick={() => this.props.incrementCount('clickCount')}>Clicked {count} times</button>  
    }
}

export default ClickCounter
