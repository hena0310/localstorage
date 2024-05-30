
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        txt1: '',
        txt2: '',
        txt3: '',
        txt4: ''

    });
    const nav = useNavigate();


    const setData = () => {
        const { txt1, txt2, txt3, txt4 } = formData;
        
        localStorage.setItem('name', txt1);
        localStorage.setItem('email', txt2);
        localStorage.setItem('password', txt3);
        localStorage.setItem('number', txt4);
        if (txt1 && txt2 && txt3 && txt4) {
            alert('Signup done successfully!');
            nav('/Login');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="signup-container">
            <h2 className="signup-header">Signup Page</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="txt1" onChange={handleChange} className="input-style" /><br /><br />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="txt2" onChange={handleChange} className="input-style" /><br /><br />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" name="txt3" onChange={handleChange} className="input-style" /><br /><br />
            </div>
            <div>
                <label>Mobile:</label>
                <input type="text" name="txt4" onChange={handleChange} className="input-style" /><br /><br />
            </div>
            <input type="button" onClick={setData} value="submit" className="button-style" />
        </div>
    );
};

export default Signup;
