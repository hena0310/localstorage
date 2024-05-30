import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Changepass from "./Changepass";

function App() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        marginBottom: '20px'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px'
    };

    return (
        <Router>
            <>
                <div style={headerStyle}>
                    <Link to='/Signup' style={linkStyle}>Signup</Link>
                    <Link to='/Login' style={linkStyle}>Login</Link>
                    <Link to='/Home' style={linkStyle}>Home</Link>
                    <Link to='/Changepass' style={linkStyle}>Changepass</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Changepass" element={<Changepass />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
