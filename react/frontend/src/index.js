import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common = {'Authorization': `Bearer ${window.sessionStorage.getItem('auth_token')}`}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
