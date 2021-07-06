import { writable, derived } from 'svelte/store';
import { browser } from '$app/env';
import { userDB } from '$login/users';
export const user = setUpUser();
export let loggedIn = derived(user, ($user) => {
    console.log($user + " logged " + ($user !== null ? "in" : "out"));
    return $user !== null;
});
export let userName = derived([user, userDB], ([$user, $userDB]) => {
    if (!$user)
        return "Bitte anmelden.";
    const name = $userDB[$user];
    return name.firstName + " " + name.surName;
});
function setUpUser() {
    const { subscribe, set } = writable(null);
    return {
        subscribe,
        login: (username) => {
            if (!browser)
                return;
            set(username);
        },
        logout: () => {
            if (!browser)
                return;
            set(null);
        },
        set: (content) => {
            set(content);
        }
    };
}
//# sourceMappingURL=auth.js.map