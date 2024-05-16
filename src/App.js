import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Employee from './page/Employee/Employee';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import ResetPasswordPage from './Components/ResetPassword/resetPassword';



function App() {
  return (
    <div>
      
      <Employee/>

    </div>
  );
}

export default App;
