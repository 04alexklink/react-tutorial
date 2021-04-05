import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: ''
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props,state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle B componentDidMount')
  }
    
  render() {
    console.log('Lifecycle B render')
    return (
      <div>
        Lifecycle B       
      </div>
    )
  }
}

export default LifeCycleB