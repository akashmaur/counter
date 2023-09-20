
import React, { Component } from 'react'

export class Ccomponent extends Component {
   
  render(){
    console.log(this.props)
    return (
        <div>
           <h1>hello {this.props.name} {this.props.cast}</h1>
          <h1>Hi this is class component</h1>
         <p>hello</p>
         
      </div>
    ) 
  }  
  
}

export default Ccomponent