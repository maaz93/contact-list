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
            AppStore.saveContact(action.contact);
            AppAPI.saveContact(action.contact);
            AppStore.emitChange();
            break;
    };
    return true;
});

export default AppStore;