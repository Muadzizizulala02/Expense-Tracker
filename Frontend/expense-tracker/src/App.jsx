import  React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/DashBoard/Home";
import Income from "./pages/DashBoard/Income";
import Expense from "./pages/DashBoard/Expense";

import UserProvider from "./context/userContext";

export const App = () => {
  return (
    <UserProvider>
    <div>
      {/* if the link has this path, open the element related to it */}
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashBoard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
};

export default App;


const Root = () => {
  // ✅ Check if token exists in LocalStorage
  const isAuthenticated = localStorage.getItem("token");

  // ✅ Return the correct component
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};