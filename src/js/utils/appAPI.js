import * as firebase from "firebase";

import AppActions from "../actions/AppActions";
import CONFIG from "./FIREBASE_CONFIG";

firebase.initializeApp(CONFIG);
const contactsRef = firebase.database().ref("contacts");

export default {
    saveContact(contact) {
        return firebase.database().ref().child("contacts").push({ contact });
    },
    getContacts() {
        contactsRef.once("value").then((snapshot) => {
            const contacts = [];
            snapshot.forEach((childSnapshot) => {
                contacts.push({
                    id: childSnapshot.key,
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email,
                });
            });
            AppActions.receiveContacts(contacts);
        });
    },
    removeContact(id) {
        contactsRef.child(id).remove();
    },
    updateContact({ id, name, phone, email }) {
        contactsRef.child(`${id}/contact`).set({
            name,
            phone,
            email
        });
    }
}