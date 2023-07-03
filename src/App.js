import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar_2 from './components/Navbar_2';
import AddProf from './components/AddProf';
import AddSchool from './components/AddSchool';
// import '../App.css';


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<><Navbar/><Home/></>} />
        <Route path="/addprof" element={<><Navbar_2/><AddProf /></>} />
        <Route path="/addschool" element={<><Navbar_2/><AddSchool /></>} />
        <Route path="/signup" element={<><Navbar/><SignUp/></>} />
        <Route path="/login" element={<><Navbar/><Login/></>} />
      </Routes>
    </>
  );
}

export default App;
