import { writable, derived } from 'svelte/store';
import { emptyUser } from '$login/users';
export const user = writable(emptyUser);
export let loggedIn = derived(user, ($user) => {
    if ($user.username === undefined || $user.username === '') {
        console.log('logged out.');
        return false;
    }
    else {
        console.log($user.username + ' logged in');
        return true;
    }
});
export function login(newUser) {
    user.update(_ => newUser);
}
export function logout() {
    user.update(_ => emptyUser);
}
//# sourceMappingURL=auth.js.map