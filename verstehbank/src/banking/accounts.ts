import { writable } from 'svelte/store';
import type { Contact } from '$banking/contacts';


type Transaction = {
    contact: Contact,
    amount: number,
    comment: string
}

type Accounts = {
    transactions : Transaction[],
    iban: string
}

type AccountDB = {
    [username:string] : Accounts
}

const initialAccounts: AccountDB = {
    beateweber : {
        iban: "DE16500105177714498372",
        transactions: [
            {
                contact: {
                    name : 'Arnold Kampmann',
                    iban : 'DE165001044555898372',
                    bank : 'V&R Rio de Janeiro'
                },
                amount: +2500,
                comment: "Gib nicht alles auf einmal aus."
            },
            {
                contact: {
                    name : 'REWE Rosenheim',
                    iban : 'DE16500105177715898372',
                    bank : 'Sparkasse Rosenheim'
                },
                amount: -57,
                comment: "Danke für Ihren Einkauf."
            }
        ]
    }
}
const accountDB = writable<AccountDB>(initialAccounts);

