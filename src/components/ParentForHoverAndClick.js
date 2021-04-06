import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
class ParentForHoverAndClick extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           hoverCount: 0,
           clickCount:0   
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount = (countParam) => {
      this.setState((prevState) => {
        return {[countParam]: prevState[countParam] + 1}
      })
    console.log('hello')
    }
    
    render() {
        return (
            <div>
              <HoverCounter hoverCount={this.state.hoverCount} incrementCount={this.incrementCount}/>
              <ClickCounter clickCount={this.state.clickCount} incrementCount={this.incrementCount}/>
            </div>
        )
    }
}

export default ParentForHoverAndClick
