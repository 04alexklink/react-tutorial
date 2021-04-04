import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isLoggedIn: true  
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
// ternary operator appraoch to conditional rendering
        // return this.state.isLoggedIn? (
        //   <h1>Welcome Alex</h1>
        //  ) : (
        //   <h1>Welcome Guest</h1>
        // )
// short circuit operator for conditional rendering where you either render something
// or nothing. This is a specific case of the ternary operator approach above
  return this.state.isLoggedIn && <h1>Welcome Alex</h1>
    }
}

export default UserGreeting
