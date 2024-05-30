import React from 'react';
import './Styles.css';

class Changepass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    compare() {
        var a = this.state.txt1;
        var b = this.state.txt2;
        var c = this.state.txt3;
        var d = localStorage.getItem('password');

        if (a === d && b === c) {
            localStorage.setItem('password', b);
            alert('Password changed successfully!');
        } else if (c !== b) {
            alert('New and confirm passwords do not match!');
        } else {
            alert('Old password does not match!');
        }
    }

    render() {
        return (
            <>
                <div className="container-style">
                    <label className="input-style">Old Password: <input type='text' onChange={(e) => this.setState({ txt1: e.target.value })} /></label>
                    <label className="input-style">New Password: <input type='text' onChange={(e) => this.setState({ txt2: e.target.value })} /></label>
                    <label className="input-style">Confirm Password: <input type='text' onChange={(e) => this.setState({ txt3: e.target.value })} /></label>
                    <button className="button-style" onClick={this.compare.bind(this)}>Submit</button>
                </div>
            </>
        );
    }
}

export default Changepass;
