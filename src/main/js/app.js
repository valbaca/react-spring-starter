import React from 'react';
import { createRoot } from 'react-dom/client';
import client from './client';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pets: []}
    }

    componentDidMount() {
        client({
            method: 'GET',
            path: '/api/pets',
        }).then(response => {
            this.setState({
                pets: response.entity._embedded.pets
            });
        });
    }

    render() {
        return (
            <PetList pets={this.state.pets}/>
        );
    }
}

class PetList extends React.Component {
    render() {
        const pets = this.props.pets.map(
            pet => <Pet key={pet._links.self.href} pet={pet}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {pets}
                </tbody>
            </table>
        )
    }
}

class Pet extends React.Component {
    render() {
        return (
          <tr>
              <td>{this.props.pet.name}</td>
              <td>{this.props.pet.description}</td>
          </tr>
        );
    }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);