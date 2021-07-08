import { derived, Readable, writable } from 'svelte/store';
import type { Contact } from '$banking/contacts';
import { user } from '$login/auth';

const initialAccounts: AccountDB = {
    beateweber : {
        iban : 'DE16500105177714498372',
        transactions : [
            {
                contact : {
                    name : 'Arnold Kampmann',
                    iban : 'DE165001044555898372',
                    bank : 'V&R Rio de Janeiro'
                },
                amount : +2500,
                comment : 'Gib nicht alles auf einmal aus.'
            },
            {
                contact : {
                    name : 'REWE Rosenheim',
                    iban : 'DE16500105177715898372',
                    bank : 'Sparkasse Rosenheim'
                },
                amount : -57,
                comment : 'Danke für Ihren Einkauf.'
            }
        ]
    }
}
export const accountDB = writable<AccountDB>(initialAccounts);
export const account: Readable<Account> = derived([accountDB, user],
    ([$accountDB, $user]) => {
        console.log('deriving account');
        console.log($accountDB);
        console.log($user);
        return $accountDB[$user.username];
    });

export const balance: Readable<number> = derived(account,
    ($account) => {
        console.log('deriving balance')
        if (!$account) return;
        console.log($account)
        return $account.transactions.map(trans => trans.amount).reduce((sum, n) => {
            console.log(`adding ${n} to ${sum}`)
            console.log(`new sum: ${sum + n}`)
            return sum + n;
        });
    });

export type Transaction = {
    contact: Contact,
    amount: number,
    comment: string
}

type Account = {
    transactions: Transaction[],
    iban: string
}

type AccountDB = {
    [username: string]: Account
}
