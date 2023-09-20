import React, { Component } from 'react'

export class Channel extends Component {
    constructor(){
        super();
        this.state={
          msg:"please subscribe my youtube channel"
        
        }
    }
    Suscribe(){
        this.setState({
            msg:"thanks"
        
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.Suscribe()}>subscribe</button>
    </div>
    )
  }
}

export default Channel