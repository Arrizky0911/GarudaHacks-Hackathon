import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import FilePicker from "./components/FilePicker";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route element={<PrivateRoutes/>}>
              <Route path="/upload" element={<FilePicker/>}/>
            </Route>
          </Routes>
          </AuthProvider>
      </Router>
    </>
  );
}

export default App;
