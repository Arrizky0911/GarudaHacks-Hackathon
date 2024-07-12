import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import ReactDOM from 'react-dom';
import App from './App';
import { Appwrite } from 'appwrite';// appwrite import statement 
import config from './config';

const appwrite = new Appwrite();
appwrite.setEndpoint(config.endpoint).setProject(config.project);


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
