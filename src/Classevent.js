import React, { Component } from 'react'

export class Classevent extends Component {
    constructor(){
        super();
        this.state={
            course:"MCA"
        }
    }
    
    changeEvent=()=>{
        this.setState({
            course:"BCA"
        })
        console.log("hello shally",this.state.course)
    }
    
  render() {
    const numbers=[2,3,4,5,6]
    const newNumber=numbers.map(function(numbers){
        console.log(numbers)
        return <li>{numbers}</li>
    })
    return (
      <div>
        <button onClick={this.changeEvent}>Hit me</button>
        <ul>{newNumber}</ul>
      </div>
    )
  }
}

export default Classevent