import React from 'react';
import ReactDOM from 'react-dom';
import { Appwrite } from 'appwrite';// appwrite import statement 
import appwriteConfig from './appwrite';// import statement 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/useAuth";
import Login from "../src/components";
import Signup from "../src/components";
import ProtectedRoute from "./utils/ProtectedRoute";

//Initializing Appwrite 
const appwrite = new Appwrite();
appwrite.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.project);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    
  );
}

export default App;