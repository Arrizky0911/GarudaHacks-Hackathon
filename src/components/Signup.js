import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../appwrite";

const Signup = () => {
    const signupForm = useRef(null);
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      const username = signupForm.current.username.value;
      const email = signupForm.current.email.value;
      const password = signupForm.current.password1.value;
      try {
        const response = await account.create(
          ID.unique(),
          email,
          password1,
          username,
        );
        console.log("Signup successful:", response);
        // Redirect or perform further actions upon successful registration
      } catch (error) {
        console.error("Signup failed:", error);
        // Handle registration errors appropriately
      }
    };

    return(
        <form ref={signupForm} onSubmit={handleSignup}>


        </form>
    );
    
};

export default Signup;

