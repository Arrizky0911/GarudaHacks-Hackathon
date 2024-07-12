import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../appwrite";

const Login = () => {
  const loginForm = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const name = loginForm.current.name.value;
    const email = loginForm.current.email.value;
    const password1 = loginForm.current.password1.value;

    try {
      const response = await account.createEmailSession(email, password1);
      console.log("User has been Logged In:", response);
      // Redirect or perform further actions upon successful registration
    } catch (error) {
      console.error("Login failed:", error);
      // Handle registration errors appropriately
    }
  };

  return (
      <form ref={loginForm} onSubmit={handleLogin}>
        
      </form>
  );
};

export default Login;