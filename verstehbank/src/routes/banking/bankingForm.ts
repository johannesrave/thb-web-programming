import { writable } from 'svelte/store';

type transaction = {
    recipient: string,
    iban: string,
    amount: number,
    tan: number
}

const emptyTransaction: transaction = {
    amount : 0,
    iban : "",
    recipient : "",
    tan : 0};

export const transactionForm = writable(emptyTransaction);