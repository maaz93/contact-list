import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

const AppActions = {
    saveContact(contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact
        });
    },
    receiveContacts(contacts) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_CONTACTS,
            contacts
        });
    },
    removeContact(id) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_CONTACT,
            id
        });
    }
};

export default AppActions;