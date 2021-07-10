import { writable } from 'svelte/store';

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