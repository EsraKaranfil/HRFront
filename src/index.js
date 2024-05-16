import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Employee from './page/Employee/Employee';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginSignup from './Components/Signup/Signup';
import MainPage from './Components/MainPage/MainPage';
import ResetPassword from './Components/ResetPassword/resetPassword'
import RootNavigation from './RootNavigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

  <RootNavigation />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
