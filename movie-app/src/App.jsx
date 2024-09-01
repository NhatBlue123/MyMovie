import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Admin/Login";
import Admin from "./components/Admin/Admin";
import SignUp from "./components/Admin/SignUp";
import MovieDetail from "./components/MovieDetail";
import { ToastContainer } from "react-toastify";
import { MovieProvider } from "./context/MovieProvider";
import MovieSearch from "./components/MovieSearch";
import AdminProvider from "./components/Admin/Context/AdminProvider";
import PlayMovie from "./components/PlayMovie";

function App() {

  return (
    <MovieProvider>
      <AdminProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/adminDz" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/:slug/detail" element={<MovieDetail />} />         
          <Route path="/:slug/play" element={<PlayMovie />} />
          <Route path="/result" element={<MovieSearch title="Ket qua tim kiem" />} />
        </Routes>
        <ToastContainer/>
      </Router>
      </AdminProvider>
    </MovieProvider>
  );
}

export default App;
