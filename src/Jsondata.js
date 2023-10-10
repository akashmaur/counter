import React, { useEffect, useState } from 'react'
import Propsapi from './Propsapi'
function Jsondata() {
    const[User, setUser]=useState([])
    useEffect(()=>{
    //  const dataFetch=()=>{   
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>setUser(data))
    //  } 
    },[])
   




  return (
    <div className='user-container'>
   
            {/* <button onClick={dataFetch()}>click me</button>
         */}
          {User.map((item,index)=>{
              
              return <Propsapi key={index} item={item}/>
            // return(
            //     <div className='user-data' key={index}>
            //       <p>{item.id}</p>
            //       <p>{item.name}</p>  
            //       <p>{item.username}</p>    
            //     </div>
            // ) 
            
          })}
    
        
    </div>
  )
}

export default Jsondata