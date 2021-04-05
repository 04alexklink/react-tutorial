import React, { PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
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
                <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
