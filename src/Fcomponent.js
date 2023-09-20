import React from 'react'
// function Fcomponent(){
//     return(
//         <div>Hi this is functional component</div>
//     )
// }
const Fcomponent=(props)=>{
    console.log(props)
    return(
        <div>
            {props.children}
          <h1>hello {props.name} {props.cast} </h1>
          
        </div>
    )
}

export default Fcomponent;