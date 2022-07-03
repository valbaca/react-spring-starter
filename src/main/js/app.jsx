import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import PetList from "./components/petList.jsx";
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pets: []}
    }

    componentDidMount() {
        fetch('api/pets')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pets: data._embedded.pets
                });
            });
    }

    render() {
        return (<PetList pets={this.state.pets}/>);
    }
}


createRoot(document.getElementById('app')).render(<App/>);