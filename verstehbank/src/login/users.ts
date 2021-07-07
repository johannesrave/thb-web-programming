import { writable } from 'svelte/store';

export type User =
    {
        username: string,
        password: string,
        firstName: string,
        surName: string
    }

type UserDB = { [username: string]: User };

let initialUsers: UserDB = {
    beateweber : {
        username : 'beateweber',
        password : '1955',
        firstName : 'Beate',
        surName : 'Weber',
    },
    tomhemp : {
        username : 'tomhemp',
        password : 'surfin',
        firstName : 'Thomas',
        surName : 'Grünberg'
    }
}

export const emptyUser: User = {firstName : '', password : '', surName : '', username : ''}

export const userDB = createUserDB();

function createUserDB() {
    const {subscribe, set, update} = writable<UserDB>(initialUsers);

    return {
        subscribe,
        // Einen user zum users-store hinzufügen.
        addUser : (newUser: string, userDetails: User) => update(userDB => {
                userDB[newUser] = userDetails;
                return userDB;
            }
        ),
        set : (content) => {
            set(content)
        }
    };
}
