import React, { useEffect, useState } from 'react'

function Fetchapi() {

    const[Jsondata,setJsondata]=useState([])

useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>setJsondata(data))
})




  return (
    <div>
        {Jsondata.map((item,index)=>{
           return(
               
            <div key={index}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
            </div>
           )
           
           
        })}
    </div>
  )
}

export default Fetchapi