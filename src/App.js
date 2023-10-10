import React from 'react'

import './App.css'
import Home from './Home'
import About from './About'
import Service from './Service'
import Header from './Header';
import Footer from './Footer';
// import Jsondata from './Jsondata'
// import Fetchapi from './Fetchapi'
// import Propsapidata from './Propsapidata'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import { formControlClasses } from '@mui/material'
export default function App() {
  
  return (
 <div className='app-container'>
   
  <Router>
        <Header />
            <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/about' element={< About />}></Route>
                    <Route exact path='/service' element={< Service />}></Route>
            </Routes>
         <Footer />
    </Router>

   {/* <Jsondata/>
   <Fetchapi/> */}
   {/* <Propsapidata/>  */}
</div> 
  )
}

