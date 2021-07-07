import { derived, writable } from 'svelte/store';
import { user } from '$login/auth';
const initialAccounts = {
    beateweber: {
        iban: 'DE16500105177714498372',
        transactions: [
            {
                contact: {
                    name: 'Arnold Kampmann',
                    iban: 'DE165001044555898372',
                    bank: 'V&R Rio de Janeiro'
                },
                amount: +2500,
                comment: 'Gib nicht alles auf einmal aus.'
            },
            {
                contact: {
                    name: 'REWE Rosenheim',
                    iban: 'DE16500105177715898372',
                    bank: 'Sparkasse Rosenheim'
                },
                amount: -57,
                comment: 'Danke für Ihren Einkauf.'
            }
        ]
    }
};
const accountDB = writable(initialAccounts);
export const account = derived([accountDB, user], ([$accountDB, $user]) => {
    console.log("deriving account");
    console.log($accountDB);
    console.log($user);
    return $accountDB[$user.username];
});
export const balance = derived(account, ($account) => {
    console.log("deriving balance");
    if (!$account)
        return;
    console.log($account);
    return $account.transactions.map(trans => trans.amount).reduce((sum, n) => sum + n);
});
//# sourceMappingURL=accounts.js.map