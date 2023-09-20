import React from 'react'

function Functionevent() {
    const changeEvent=()=>{
         console.log("hello everyone");
    }
  return (
    <div>
        <button onClick={changeEvent}>click me</button>
    </div>
  )
}

export default Functionevent