import React from "react";
import AppActions from "../actions/AppActions";

class EditForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const contact = {
            id: this.props.contactToEdit.id,
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()
        };
        AppActions.updateContact(contact);
    }

    render() {
        const { name, phone, email } = Object.assign({}, this.props.contactToEdit, this.state);
        return (
            <div className="well">
                <h3>Edit Contact</h3>
                <form ref="addForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" name="name" onChange={this.handleChange} value={name} className="form-control" placeholder="Add Contact Name..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" name="phone" onChange={this.handleChange} value={phone} className="form-control" placeholder="Add Phone Number..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="email" name="email" onChange={this.handleChange} value={email} className="form-control" placeholder="Add Email..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditForm;