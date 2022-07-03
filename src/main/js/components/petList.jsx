import React from "react";
import Pet from "./pet.jsx";
import {Container, Table} from "reactstrap";

class PetList extends React.Component {
    render() {
        const pets = this.props.pets.map(pet => <Pet key={pet._links.self.href} pet={pet} onPetChange={this.props.onPetsChange}/>);
        return (<Container fluid>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pets}
                    </tbody>
                </Table>
            </Container>)
    }
}

export default PetList