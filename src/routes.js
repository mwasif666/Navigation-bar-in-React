import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import About from './about';
import Contact from './contact';
import Home from './home';
import Navigation from './navigation';


const Anchor=()=>{
 return(
    <>
    <Router>
       <Navigation />

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
       </Routes>
    </Router>
    
    </>
 )
}
export default Anchor;