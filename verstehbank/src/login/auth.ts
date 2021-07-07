import { writable, derived } from 'svelte/store';
import { browser } from '$app/env';
import { User, emptyUser } from '$login/users';


export const user = writable<User>(emptyUser);
// export const user = setUpUser();

export let loggedIn = derived(user, ($user) => {
    if ($user.username === '') {
        console.log('logged out.')
        return false;
    } else {
        console.log($user.username + ' logged in');
        return true;
    }
});

// export let userName = derived([user, userDB], ([$user, $userDB]) => {
//     // if (!$user) return 'Bitte anmelden.';
//     // const name = $userDB[$user];
//     return $user.firstName + ' ' + $user.surName;
// });

function setUpUser() {
    const {subscribe, set} = writable(null);

    return {
        subscribe,
        login : (user: User) => {
            if (!browser) return;
            set(user);
        },
        logout : () => {
            if (!browser) return;
            set(null)
        },
        set : (content) => {
            set(content)
        }
    };
}

export function login(newUser: User) {
    user.update(_ => newUser);
}


export function logout() {
    user.update(_ => emptyUser);
}