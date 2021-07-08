import { writable, derived } from 'svelte/store';
import { User, emptyUser } from '$login/users';

export const user = writable<User>(emptyUser);

export let loggedIn = derived(user, ($user) => {
    if ($user.username === '') {
        console.log('logged out.')
        return false;
    } else {
        console.log($user.username + ' logged in');
        return true;
    }
});

export function login(newUser: User) {
    user.update(_ => newUser);
}


export function logout() {
    user.update(_ => emptyUser);
}