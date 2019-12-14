import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import PupservationPage from './routes/PupservationPage/pupservationPage';

ReactDOM.render(
    <BrowserRouter>
        <PupservationPage />
    </BrowserRouter>, 
    document.getElementById('root')
);
