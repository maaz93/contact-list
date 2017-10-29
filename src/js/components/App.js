import React from "react";
import AppStore from "../stores/AppStore";

class App extends React.Component {

    _handleChange() {

    }

    componentDidMount() {
        AppStore.addChangeListener(this._handleChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._handleChange);
    }

    render() {
        return (
            <div>
                APP
            </div>
        );
    }
}

export default App;