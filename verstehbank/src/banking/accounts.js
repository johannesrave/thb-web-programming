import { writable } from 'svelte/store';
const initialAccounts = {
    beateweber: {
        iban: "DE16500105177714498372",
        transactions: [
            {
                contact: {
                    name: 'Arnold Kampmann',
                    iban: 'DE165001044555898372',
                    bank: 'V&R Rio de Janeiro'
                },
                amount: +2500,
                comment: "Gib nicht alles auf einmal aus."
            },
            {
                contact: {
                    name: 'REWE Rosenheim',
                    iban: 'DE16500105177715898372',
                    bank: 'Sparkasse Rosenheim'
                },
                amount: -57,
                comment: "Danke für Ihren Einkauf."
            }
        ]
    }
};
const accountDB = writable(initialAccounts);
//# sourceMappingURL=accounts.js.map