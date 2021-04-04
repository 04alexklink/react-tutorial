import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isLoggedIn: false  
        }
    }
    
    render() {
        // element variable approach to conditional rendering
    //   let message;
    //   if(this.state.isLoggedIn) {
    //     message = <h1>Welcome Alex</h1>
    //   } else {
    //     message = <h1>Welcome Guest</h1>
    //   }

    //   return <div>{message}</div>
  
    // If/Else conditional rendering approach to conditional rendering
        // if(this.state.isLoggedIn) {
        //   return <h1>Welcome Alex</h1>
        // } else {
        //   return <h1>Welcome Guest</h1>
        // }

        return this.state.isLoggedIn? (
          <h1>Welcome Alex</h1>
         ) : (
          <h1>Welcome Guest</h1>
        )
    }
}

export default UserGreeting
