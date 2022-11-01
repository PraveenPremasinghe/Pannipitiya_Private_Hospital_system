import React from "react";
import loginimg from '../Assets/Images/login.jpg';
import dashlogo from "../Assets/Images/dashlogo.png";
import InputFeild from "../Components/InputFeild/inputfeild";
import "../Assets/Styles/logim.css";
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";






function Login (props) {
  return (
<div>

 <div className="row">

    <div className="col-8"><img className="loginimg" src={loginimg} width={"100%"} height={"100%"}/></div>
    <div className="col-4">
    <div className="logologin">
              <img alt="logo" src={dashlogo} />
            </div>
      <h5 class="signup">Sign In to your account</h5>
      
      <div className="logincover">

      <Form>
      <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Passowrd" placeholder="Passowrd" />
      </Form.Group>
   
     
     <button className="loginbuttn">Sign In</button>
    </Form>
      </div>
   

   <div className="account">Need an account?   <Link to="/login">Create an account </Link></div> 

    </div>
 </div>
  
</div>
  );
}

export default Login;
