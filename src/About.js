import React from 'react'
import { useState,useEffect } from 'react'


function About() {
  const[apidata,setapidata]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then(data=>setapidata(data))
  },[])
  
  return (
    <div className='about-container'>
    {apidata.sort((a, b) => a.title.localeCompare(b.title)).map((item, index)=>{
       return (
        <div className='about-data' key={index}>
          <p>{item.id}</p>
          <p>{item.title}</p>
         </div> 
       )
     })}
    
    </div>
  )
}

export default About