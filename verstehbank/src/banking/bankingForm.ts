// imported https://github.com/koblas/ibankit-js to validate IBANs

import { writable } from 'svelte/store';
import { IBAN } from 'ibankit';

type Transaction = {
    recipient: string,
    iban: string,
    amount: number,
    tan: number
}

export const emptyTransaction: Transaction = {
    amount : 0,
    iban : '',
    recipient : '',
    tan : 0
};

export const transactionForm = writable<Transaction>(emptyTransaction);