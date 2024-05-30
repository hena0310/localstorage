
import React from 'react';
import './Styles.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    compare() {
        var a = this.state.txt1;
        var b = this.state.txt2;
        var c = localStorage.getItem('email');
        var d = localStorage.getItem('password');

        if (a === c && b === d) {
            window.location = 'http://localhost:3000/Home';
        } else {
            alert('Do not match');
        }
    }

    emailCompare() {
        var a = localStorage.getItem('email');
        var b = localStorage.getItem('password');
        var c = this.state.txt3;
        if (a === c) {
            alert('password is: ' + b);
        } else {
            alert('email do not match');
        }
    }

    render() {
        return (
            <div className="container-style">
                <h2 className="title-style">Login Page</h2>
                <input
                    type='text'
                    placeholder='Email'
                    className="input-style"
                    onChange={(e) => this.setState({ txt1: e.target.value })}
                /><br /><br />
                <input
                    type='password'
                    placeholder='Password'
                    className="input-style"
                    onChange={(e) => this.setState({ txt2: e.target.value })}
                /><br /><br />
                <button
                    onClick={this.compare.bind(this)}
                    className="button-style"
                >
                    Login
                </button><br /><br />
                <input
                    type='text'
                    placeholder='Forgot password'
                    className="input-style"
                    onChange={(e) => this.setState({ txt3: e.target.value })}
                />
                <button
                    onClick={this.emailCompare.bind(this)}
                    className="button-style"
                >
                    Check
                </button>
            </div>
        );
    }
}

export default Login;
