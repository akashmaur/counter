import React from 'react'
import Button from '@mui/material/Button';

function Todo() {
  return (
    <div className='main-div'>
        <div className='center-div'>
          <br/>
           <h1>Todo List</h1>
           <br/>
           <input type='text' placeholder='Add to items'/>
           
           <Button color='secondary' variant='contained'> + </Button>
        </div>
    </div>
  )
}

export default Todo