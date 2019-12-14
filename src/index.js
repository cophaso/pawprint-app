import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import HomePage from './routes/HomePage/HomePage';

ReactDOM.render(
    <BrowserRouter>
        <HomePage />
    </BrowserRouter>, 
    document.getElementById('root')
);
