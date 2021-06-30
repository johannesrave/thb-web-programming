import { writable } from 'svelte/store';

type transaction = {
    recipient: string,
    iban: string,
    amount: number,
    tan: number
}

export const transactionForm = writable({});