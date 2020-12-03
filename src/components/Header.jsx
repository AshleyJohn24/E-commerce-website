import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (

<header>
<div>
<nav className="navbar navbar-expand-lg">
  <h1>Fashion</h1>
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
         
            <Link to='/Women'>Women's</Link>
       
            </li>
            <li className="nav-item">
      
            <Link to='/Men'>Men's</Link>
  
            </li>
            <li className="nav-item">
     
            <Link to='/Kid'>Kid's</Link>
      
            </li>
            <li className="nav-item">
    
            <Link to='/About'>About</Link>
   
            </li>
          </ul>
        <div >
        <ul className="navbar-nav">
            <li className="nav-item">
           <Link  to='/Login' className="nav-link register">Login</Link>
           </li>
            </ul>
            </div>
         
</nav>
  </div>
</header>
   );
}
export default Header;
