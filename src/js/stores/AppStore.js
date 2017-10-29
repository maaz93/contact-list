import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import { EventEmitter } from "events";
import AppAPI from "../utils/appAPI";

const CHANGE_EVENT = "change";

let _movies = [], _searchInProgress = false, _searchedOnce = false;

const AppStore = Object.assign({}, EventEmitter.prototype, {
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

    };
    return true;
});

export default AppStore;