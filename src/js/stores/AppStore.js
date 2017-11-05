import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";
import AppAPI from "../utils/appAPI";

const CHANGE_EVENT = "change";

let _contacts = [];

const AppStore = Object.assign({}, EventEmitter.prototype, {
    saveContact(contact) {
        _contacts.push(contact);
    },
    getContacts() {
        return _contacts;
    },
    setContacts(contacts) {
        _contacts = contacts;
    },
    removeContact(id) {
        _contacts = _contacts.filter((contact) => {
            return contact.id !== id;
        });
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
        case AppConstants.SAVE_CONTACT:
            console.log("Saving contact...");
            AppAPI.saveContact(action.contact).then(({ key: id }) => {
                AppStore.saveContact(Object.assign({}, action.contact, { id }));
                AppStore.emitChange();
            });
            break;
        case AppConstants.RECEIVE_CONTACTS:
            console.log("Receiving contacts...");
            AppStore.setContacts(action.contacts);
            AppStore.emitChange();
            break;
        case AppConstants.REMOVE_CONTACT:
            console.log("Removing contact...");
            AppStore.removeContact(action.id);
            AppAPI.removeContact(action.id);
            AppStore.emitChange();
            break;
    };
    return true;
});

export default AppStore;