import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './oldComponents/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './oldComponents/Login';
import Navbar_2 from './oldComponents/Navbar_2';
import Navbar3 from './components/Navbar3';
import AddProf from './components/AddProf';
import AddSchool from './components/AddSchool';
import SearchByProfResult from './components/SearchByProfResult';
import SearchBySchoolresult from './components/SearchBySchoolresult';
import Footer from './components/Footer';
// import '../App.css';


function App() {
  return (
    <>
    <Navbar3/>
     <Routes>
        <Route path="/" element={<><Home/></>} />
        <Route path="/searchByProfResult" element={<><SearchByProfResult/></>} />
        <Route path="/searchBySchoolResult" element={<><SearchBySchoolresult/></>} />
        <Route path="/addprof" element={<><AddProf /></>}/>
        <Route path="/addschool" element={<><AddSchool /></>} />
        
        <Route path="/signup" element={<><Navbar/><SignUp/></>} />
        <Route path="/login" element={<><Navbar/><Login/></>} />
      </Routes>
      <Footer/>
    </>
  );<SearchByProfResult/>
}

export default App;
