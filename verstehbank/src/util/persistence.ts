import { userDB } from "$login/users";
import { loggedIn, user } from '$login/auth';
import { browser } from "$app/env";


const persistentData = {
    "userDB" : userDB,
    "user" : user
}

export function initialize(){
    if (!browser) return;
    retrieveAllStores();
    subscribeAllStores();

    function retrieveAllStores() {
        for (let [key, store] of Object.entries(persistentData)) {
            // if local storage exists but is null, don't overwrite data in memory.
            if(!JSON.parse(localStorage.getItem(key))) return;

            console.log(`persistence retrieving ${key} from localStorage`);
            store.set(JSON.parse(localStorage.getItem(key)));
        }
    }

    function subscribeAllStores() {
        for (let [key, store] of Object.entries(persistentData)) {
            console.log(`persistence subscribing to ${key}`);
            store.subscribe((updatedStore) => {
                localStorage.setItem(key, JSON.stringify(updatedStore));
                console.log(`saving ${key} to localStorage`);
            })
        }
    }
}

