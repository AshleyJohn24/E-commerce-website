import React,{ useState } from "react";
import axios from "axios";

function Register(props) {

    const [contact, setContact] = useState({
      email: "",
      password:"",
      confirm_password:""
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
   
    function handleSubmit(event) {
      const { email, password, confirm_password } = this.state;
  
      axios
        .post(
          "http://localhost:3001/registrations",
          {
            user: {
              email: email,
              password: password,
              password_confirmation: confirm_password
            }
          },
          { withCredentials: true }
        )
        .then(response => {
          if (response.data.status === "created") {
            this.props.handleSuccessfulAuth(response.data);
          }
        })
        .catch(error => {
          console.log("registration error", error);
        });
      event.preventDefault();
    }

    return (

      <div className="container">
        <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <div className="box-input">
          <input
            onChange={handleChange}
            value={contact.email}
            name="email"
            placeholder="Email"
            style={{marginBottom:"10px"}}
          />
            <input
            onChange={handleChange}
            value={contact.password}
            name="password"
            placeholder="Password"
            style={{marginBottom:"10px"}}
          />
            <input
            onChange={handleChange}
            value={contact.confirm_password}
            name="confirm_password"
            placeholder="Confirm Password"
            style={{marginBottom:"10px"}}
          />
          <button style={{marginBottom:"10px"}}>Submit</button>
          </div>
        </form>
        </div>
    )

  }

export default Register;
