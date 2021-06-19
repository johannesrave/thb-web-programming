import {writable, get} from 'svelte/store';
import {browser} from '$app/env';

export const loggedIn = writable({});

/*
Diese Funktion gibt einen svelte-store zurück,
auf dem zuätzlich Methoden angelegt wurden, um den store in localStorage
abzulegen und auch wieder zu laden.
Der store soll so als eine kleine Mock-Datenbank für Nutzernamen dienen.
Die Passwörter werden unverschlüsselt gespeichert, es handelt sich nur um ein MockUp
um den Umgang mit stores und localStorage zu lernen.
 */
function createUsers() {
    const {subscribe, set, update} = writable({
        beateweber: {
            password: "1955",
            firstName: "Beate",
            surName: "Weber"
        }
    });

    return {
        subscribe,
        // Einen user zum users-store hinzufügen.
        addUser: (name, password) => update(userDB => {
            userDB[name] = password;
            return userDB;
        }),
        // Den users-store in den localStorage schreiben
        store: () => {
            if (!browser) return;
            localStorage.users = JSON.stringify(get(users))
        },
        // Den users-store aus localStorage wieder herstellen
        restore: () => {
            if (browser && localStorage.hasOwnProperty("users")) {
                console.log("restoring from local storage:");
                console.log(localStorage.users);
                set(JSON.parse(localStorage.users));
            }
        },
    };
}

export const users = createUsers();