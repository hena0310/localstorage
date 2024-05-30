import React from 'react';
import './Styles.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: [] };
    }
    removeData() {
        localStorage.clear();
        window.location = 'http://localhost:3000/Login';
    }
    componentDidMount() {
        this.print();
    }

    print() {
        if (localStorage.getItem('name')) {
            var a = localStorage.getItem('name');
            this.setState({ msg: a });
        } else {
            this.setState({ msg: 'No user Logged In' });
        }
    }
    render() {
        return (
            <div className="container-style">
                <h1>Welcome</h1>
                <h2 className="msg-style">{this.state.msg}</h2>
                <input
                    type='button'
                    value='Logout'
                    onClick={this.removeData.bind(this)}
                    className="button-style"
                />
            </div>
        );
    }
}

export default Home;
