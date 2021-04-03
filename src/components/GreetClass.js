import React, {Component} from 'react'

class GreetClass extends Component {
  render() {
      return <h1>Welcome {this.props.firstName} {this.props.secondName}</h1>
  }
}

export default GreetClass