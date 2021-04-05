import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: ''
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props,state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle A componentDidMount')
  }
    
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
          Lifecycle A 
      <LifeCycleB></LifeCycleB>       
      </div>
    )
  }
}

export default LifeCycleA
