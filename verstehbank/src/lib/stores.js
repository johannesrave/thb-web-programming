import {writable, get} from 'svelte/store';
import {browser} from '$app/env';

export const user = setUpUser()
export const userDB = createUserDB();

function setUpUser() {
    const {subscribe, set} = writable(null);

    return {
        subscribe,
        login: (username) => {
            if (!browser) return;

            localStorage.user = JSON.stringify(get(user))
            set(username);
        },
        logout: () => {
            set(null)
            localStorage.setItem("user", null);
        },
        sync: () => {
            if (!browser || localStorage.getItem("user") === null) return;

            set(localStorage.user);
        }
    };
}


/*
Diese Funktion gibt einen svelte-store zurück,
auf dem zuätzlich Methoden angelegt wurden, um den store in localStorage
abzulegen und auch wieder zu laden.
Der store soll so als eine kleine Mock-Datenbank für Nutzernamen dienen.
Die Passwörter werden unverschlüsselt gespeichert, es handelt sich nur um ein MockUp
um den Umgang mit stores und localStorage zu lernen.
 */
function createUserDB() {
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
            localStorage.users = JSON.stringify(get(userDB))
        },
        // Den users-store aus localStorage wieder herstellen
        restore: () => {
            if (browser && localStorage.hasOwnProperty("userDB")) {
                console.log("restoring from local storage:");
                console.log(localStorage.users);
                set(JSON.parse(localStorage.users));
            }
        },
    };
}


export const contacts = writable(
    [
        {
            name: "Neuen Empfänger anlegen",
            iban: "",
            bank: "",
            createNewContact: true
        },
        {
            name: "Thomas Friedrich",
            iban: "DE26500105173512514936",
            bank: "BLT Bank Nauen"
        },
        {
            name: "REWE Rosenheim",
            iban: "DE16500105177715898372",
            bank: "Sparkasse Rosenheim"
        },
        {
            name: "BetterLife GmbH",
            iban: "DE57500105176332758532",
            bank: "Int. Ltd. WorldWide"
        },
    ]
)

export const selectedContact = writable({
        name: "Neuen Empfänger anlegen",
        iban: "",
        bank: "",
        createNewContact: true
    }
)