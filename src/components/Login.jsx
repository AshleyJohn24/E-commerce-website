import React,{ useState } from "react";
import { Link } from 'react-router-dom';

function Login() {
    const [contacts, setContact] = useState({
      email: "",
      password: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setContact(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
      });
    }
  
    return (
    
      <div className="container">
        <form>
        <h1>Login Here</h1>
          <input
            onChange={handleChange}
            value={contacts.email}
            name="email"
            placeholder="Email"
            style={{marginBottom:"10px"}}
          />
            <input
            onChange={handleChange}
            value={contacts.password}
            name="password"
            placeholder="Password"
            style={{marginBottom:"10px"}}
          />
          <button style={{marginBottom:"10px"}}>Submit</button>
          <p> New User? <Link  to='/Register'>Register</Link></p>
          
        </form>
      </div>

    );
  }

export default Login;