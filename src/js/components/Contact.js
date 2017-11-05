import React from "react";
import AppActions from "../actions/AppActions";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleEdit(e) {

    }

    handleRemove(e) {
        AppActions.removeContact(this.props.contact.id);
    }

    render() {
        const { name, phone, email } = this.props.contact;
        return (
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                    <a href="#" className="btn btn-default" onClick={this.handleEdit}>Edit</a>
                    <a href="#" className="btn btn-danger" onClick={this.handleRemove}>Remove</a>
                </td>
            </tr>
        );
    }
}

export default Contact;