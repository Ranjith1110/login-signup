import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
import Signup from './Components/Signup.jsx';
import Navbar from './Components/Navbar.jsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App