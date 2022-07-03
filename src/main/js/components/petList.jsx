import React from "react";
import Pet from "./pet.jsx";

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

export default PetList