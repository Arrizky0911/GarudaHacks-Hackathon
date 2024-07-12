import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import FilePicker from "./components/FilePicker";
import ResponsePage from "./components/ResponsePage";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled, { createGlobalStyle } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    
      
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/file-picker" element={<FilePicker />} />
              <Route path="/response" element={<ResponsePage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
