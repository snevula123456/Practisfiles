import React from 'react';

import {NavLink} from 'react-router-dom';


import './Navbar.css'

const Navbar = (props) => {
     
     return(
          <div className = "Nav">
               
               <img src="https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-1200-80.jpg" alt="Logo"/>
              <nav>
                    <ul>
                        <NavLink to = "/signup">signup </NavLink>
                        <NavLink to = "/login">Login</NavLink>
                        <NavLink to = "/">Home</NavLink>
                        
                   </ul>
              </nav>
          </div>
     ) 
     
}

export default Navbar