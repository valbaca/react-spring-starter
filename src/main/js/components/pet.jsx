import React from "react";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "reactstrap";

class Pet extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.pet.name}</td>
                <td>{this.props.pet.description}</td>
                <td>
                    <ButtonGroup>
                        {/*<Button size="sm" color="primary" tag={Link} to={"/pets/" + this.props.pet.id}>Edit</Button>*/}
                        <Button size="sm" color="danger" onClick={() => this.remove(this.props.pet.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }

    async remove(id) {
        await fetch(`/api/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.onPetChange()
            // let updatedGroups = [...groups].filter(i => i.id !== id);
            // setGroups(updatedGroups);
        });
    }
}
export default Pet