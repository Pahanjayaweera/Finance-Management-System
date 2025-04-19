import React from 'react'


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expenses from "./pages/Dashboard/Expense";
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/SignUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/Income" exact element={<Income />} />
            <Route path="/Expenses" exact element={<Expenses />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  )
}

export default App

const Root = () => {
  //Check if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ):(
    <Navigate to="/login" />
  );
};
