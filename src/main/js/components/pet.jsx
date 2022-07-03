import React from "react";

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
export default Pet