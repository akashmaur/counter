import React from 'react'

function Propsapidata(props) {
    let{item}=props
  return (
    <div>
        <p>{item.id}</p>
        <p>{item.body}</p>
    </div>
  )
}

export default Propsapidata