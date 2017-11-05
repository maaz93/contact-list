import React from "react";
import AppActions from "../actions/AppActions";
import Contact from "./Contact";

class ContactList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Contacts</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact) => {
                                return <Contact contact={contact} key={contact.id} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactList;