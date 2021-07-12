import { writable } from 'svelte/store';

type Transaction = {
    recipient: string,
    iban: string,
    bank: string,
    amount: number,
    tan: number,
}

export const emptyTransaction: Transaction = {
    amount : 0,
    iban : '',
    bank: '',
    recipient : '',
    tan : 0
};

export const transactionForm = writable<Transaction>(emptyTransaction);