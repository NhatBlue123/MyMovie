import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Admin/Login";
import Admin from "./components/Admin/Admin";
import SignUp from "./components/Admin/SignUp";
import Test from "./components/Admin/Test";
import MovieDetail from "./components/MovieDetail";
import { ToastContainer } from "react-toastify";
import { MovieProvider } from "./context/MovieProvider";
import MovieSearch from "./components/MovieSearch";

function App() {

  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/adminDz" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/:slug/detail" element={<MovieDetail />} />
          <Route path="/result" element={<MovieSearch title="Ket qua tim kiem" />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MovieProvider>
  );
}

export default App;
