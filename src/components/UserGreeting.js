import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isLoggedIn: false  
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
          return <h1>Welcome Alex</h1>
        } else {
          return <h1>Welcome Guest</h1>
        }
        // return (
        //     <div>
        //         if(this.state.isLoggedIn)
        //       <h1>Welcome Alex</h1>
        //       <h1>Welcome Guest</h1>  
        //     </div>
        // )
    }
}

export default UserGreeting
