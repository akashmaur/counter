import React from 'react'
import { useState,useEffect } from 'react'
function Service() {
  const data = [{address:"Gorakhpur",status:"false"},{address:"Bast",status:"false"},{address:"Khalilabad",status:"true"},{address:"Delhi",status:"false"}]  
  return (
    <div className='service-container'>
      <div className='main-container'>
      {data.map((item, index)=>{
        return(
          <div key={index}>
             <p style={{color: item.status=="false" ? "red" : "green"}}>{item.address} {item.status}</p>
          </div>  
        )
      })}
      </div>
    </div>
  )
}

export default Service