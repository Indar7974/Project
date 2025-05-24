import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
import SignUp from "./Pages/Signup";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={ <ProtectedRoute>
          <Home/>
        </ProtectedRoute>} />
        <Route path="/about" element={ <ProtectedRoute>
          <About />
        </ProtectedRoute>} />
        {/* <Route path="/search" element={ <ProtectedRoute>
          <Search/>
        </ProtectedRoute>} />
        <Route path="/details" element={ <ProtectedRoute>
          <Details/>
        </ProtectedRoute>} /> */}
        <Route path="/contact" element={<ProtectedRoute>
          <Contact />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
