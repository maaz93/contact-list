import React from "react";
import AppStore from "../stores/AppStore";
import AddForm from "./AddForm";
import ContactList from "./ContactList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: AppStore.getContacts()
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
            contacts: AppStore.getContacts()
        });
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div>
                <AddForm />
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}

export default App;