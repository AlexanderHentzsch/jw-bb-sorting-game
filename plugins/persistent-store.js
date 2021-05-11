import VuexPersistence from 'vuex-persist';
import * as localforage from "localforage";

export default ({store}) => {

    localforage.config({
        driver: localforage.INDEXEDDB,
        name: 'cec-projekt-gmbh',
        version: 1.0,
        storeName: 'store',
        description: 'Persistent Vuex Store',
    });

    return new VuexPersistence({
        key: 'vuex', // The key to store the state on in the storage provider.
        storage: localforage, // or window.sessionStorage or localForage
        asyncStorage: true,
        //reducer: (state) => ({}),
        //modules: [''],
    }).plugin(store);
}