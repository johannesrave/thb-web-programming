import {writable, derived} from 'svelte/store';
import {browser} from '$app/env';

export const user = setUpUser()
export let loggedIn = derived(user, ($user) => {
    console.log($user + " logged " + ($user !== null ?  "in" : "out"))
    return $user !== null;
})

function setUpUser() {
    const {subscribe, set} = writable(null);

    return {
        subscribe,
        login: (username) => {
            if (!browser) return;
            set(username);
        },
        logout: () => {
            if (!browser) return;
            set(null)
        },
        retrieve: () => {
            if (!browser) return;

            const storedUser = JSON.parse(localStorage.getItem("user"));
            console.log((storedUser ? storedUser : "noone") + " is logged in.");

            set(storedUser);
        }
    };
}

user.subscribe(updatedUser => {
    if (!browser) return;
    localStorage.setItem("user", JSON.stringify(updatedUser));

    console.log("saving user " + updatedUser + " to localStorage")
})