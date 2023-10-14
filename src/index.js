import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import App from "./components/App";
import Footer from "./components/Footer";
import NavCode from "./components/NavCode";
import './style/theme.scss'
import './style/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() =>{
    root.render(
        <React.StrictMode>
            <Navbar/>
            <App/>
            <Footer/>
        </React.StrictMode>
    );
}, 0)

reportWebVitals();
