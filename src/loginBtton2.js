import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import './css/loginBtton2.css';

const LoginButton2 = () => {
  const { loginWithRedirect } = useAuth0();


  return <button id='loginBtton2' variant="secondary" onClick={() => loginWithRedirect()}  >Log In</button>;
};

export default LoginButton2;

// style={{backgroundColor: "#1b1717",color:'#eeebdd'}}