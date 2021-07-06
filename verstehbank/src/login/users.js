import { writable } from 'svelte/store';
let initialUsers = {
    beateweber: {
        username: 'beateweber',
        password: '1955',
        firstName: 'Beate',
        surName: 'Weber',
    },
    tomhemp: {
        username: 'tomhemp',
        password: 'surfin',
        firstName: 'Thomas',
        surName: 'Grünberg'
    }
};
export const userDB = createUserDB();
function createUserDB() {
    const { subscribe, set, update } = writable(initialUsers);
    return {
        subscribe,
        // Einen user zum users-store hinzufügen.
        addUser: (newUser, userDetails) => update(userDB => {
            userDB[newUser] = userDetails;
            return userDB;
        }),
        set: (content) => {
            set(content);
        }
    };
}
//# sourceMappingURL=users.js.map