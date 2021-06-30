import { writable } from 'svelte/store';

type transaction = {
    recipient: string,
    iban: string,
    amount: number,
    tan: number
}

export const emptyTransaction: transaction = {
    amount : 0,
    iban : "",
    recipient : "",
    tan : 0
};

export const transactionForm = writable(emptyTransaction);

/*
export const transactionForm = setupTransactionForm();

function setupTransactionForm() {
    const {subscribe, set} = writable(emptyTransaction);

    return {
        subscribe,
        unset: () => set(emptyTransaction),
    };
}
*/