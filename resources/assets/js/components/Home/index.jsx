import React, { Component } from 'react';
import NavBar from '../NavBar';

class Home extends Component {

    constructor(...props) {
        super(...props);
    }

    componentDidMount(){
        this.props.fetchUsers();
    };

    render() {
        const { message } = this.props;
        return (
            <div>
                <NavBar />
                <h1>Home Page</h1>
                <hr/>
                <h3>{ message }</h3>
            </div>
        );
    }
}

export default Home;
