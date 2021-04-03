import React, {Component} from 'react'

class GreetClass extends Component {
  render() {
    const {firstName, secondName} = this.props 
      return <h1>Welcome {firstName} {secondName}</h1>
  }
}

export default GreetClass