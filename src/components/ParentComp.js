import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: 'Alex'
        }
    }

    componentDidMount() {
      setInterval(() => {
        this.setState({
          name:'Alex'
        })
      }, 5000)
    }
    
    render() {
        console.log('Parent Component render')
        return (
            <div>
                ParentComponent
                {/* <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
