// src/main.jsx atau src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './index.css'; // Pastikan untuk mengimpor file CSS yang telah Anda tambahkan font-nya

// Buat root baru
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render aplikasi menggunakan root baru
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
