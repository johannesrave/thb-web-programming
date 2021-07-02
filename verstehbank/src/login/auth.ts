import {writable, derived} from 'svelte/store';
import {browser} from '$app/env';
import {userDB} from "$lib/stores";

export const user = setUpUser();

export let loggedIn = derived(user, ($user) => {
    console.log($user + " logged " + ($user !== null ?  "in" : "out"))
    return $user !== null;
});

export let userName = derived([user, userDB], ([$user, $userDB]) => {
    if (!$user) return "Bitte anmelden.";
    const name = $userDB[$user];
    return name.firstName + " " + name.surName;
});

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
        },
        set: (content) => {set(content)}
    };
}

user.subscribe(updatedUser => {
    if (!browser) return;
    localStorage.setItem("user", JSON.stringify(updatedUser));

    console.log("saving user " + updatedUser + " to localStorage")
})