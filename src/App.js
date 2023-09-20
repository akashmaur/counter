
// import { useState } from 'react';
import './App.css';
// import Counter from './Counter'
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Channel from './Channel';
import Functionevent from './Functionevent';
import Classevent from './Classevent';
const App=()=> {
  // const[count,setcount]=useState(0)

  //  const incrementHandler=()=>{
  //   setcount(count+1);
  //  }
  //  const decrementHandler=()=>{
  //   if(count>0){
  //   setcount(count-1);
  //   }
  //  }
  //  const resetHandler=()=>{
  //   setcount(0);
   

    return (
    <div className="App">
      <Fcomponent name="vikash" cast="yadav">
        <p>hello mini</p>
      </Fcomponent>  
      <Fcomponent name="shashi" cast="maurya"/>
      <Fcomponent name="akash" cast="sharma"/>
      <Ccomponent name="savita" cast="verma"/>
      <Channel/>
      <Functionevent/>
      <Classevent/>
      {/* <Counter incrementHandler={incrementHandler} decrementHandler={decrementHandler} count={count} resetHandler={resetHandler}/> */}
    </div>
  );
}

export default App;
