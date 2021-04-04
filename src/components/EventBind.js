import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
     super(props)

     this.state = {
      message: 'Hello'    
     }
 }

  changeMessage = () => {
    this.setState({
      message: 'Goodbye!'
    })
  }
 
    render() {
        return (
            <div>
                <button onClick={this.changeMessage.bind(this)}>Click</button>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default EventBind
