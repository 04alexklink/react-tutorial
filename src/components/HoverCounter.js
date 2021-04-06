import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
      const count = this.props.hoverCount
      return <h2 onMouseOver={() => this.props.incrementCount('hoverCount')}>Hovered {count} times</h2>
    }
}

export default HoverCounter
