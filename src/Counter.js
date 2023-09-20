import React from 'react'
const Counter=(props)=>{
    console.log(props)
    let {incrementHandler,decrementHandler,count,resetHandler}=props 
    return(
        <div >
         count:{count} <br/>  
        <button onClick={incrementHandler}>Incement</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
        </div>
    )
}
export default Counter;