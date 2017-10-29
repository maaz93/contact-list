import React from "react";
import AppActions from "../actions/AppActions";

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const contact = {
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()
        };
        AppActions.saveContact(contact);
    }

    render() {
        return (
            <div className="well">
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" className="form-control" placeholder="Add Contact Name..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" className="form-control" placeholder="Add Phone Number..." />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="email" className="form-control" placeholder="Add Email..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddForm;