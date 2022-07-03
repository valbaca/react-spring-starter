import React from 'react';
import {createRoot} from 'react-dom/client';
import client from './api/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetList from "./components/petList.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pets: []}
    }

    componentDidMount() {
        client({
            method: 'GET', path: '/api/pets',
        }).then(response => {
            this.setState({
                pets: response.entity._embedded.pets
            });
        });
    }

    render() {
        return (<PetList pets={this.state.pets}/>);
    }
}


createRoot(document.getElementById('app')).render(<App/>);