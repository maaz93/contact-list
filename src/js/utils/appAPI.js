import * as firebase from "firebase";

import AppActions from "../actions/AppActions";
import CONFIG from "./FIREBASE_CONFIG";

firebase.initializeApp(CONFIG);

export default {
    saveContact(contact) {
        firebase.database().ref().child("contacts").push({contact});
    }
}