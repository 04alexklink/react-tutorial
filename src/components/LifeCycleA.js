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

  changeState = () => {
    this.setState({
      name: 'Adam'
    })
  }

  static getDerivedStateFromProps(props,state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Lifecycle A componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('Lifecycle A shouldComponentUpdate')
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle A getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('Lifecycle A componentDidUpdate')
  }
    
  render() {
    console.log('Lifecycle A render')
    return (
      <div>
          Lifecycle A 
      <LifeCycleB></LifeCycleB>   
      <button onClick={() => this.changeState()}>Change State</button>    
      </div>
    )
  }
}

export default LifeCycleA
