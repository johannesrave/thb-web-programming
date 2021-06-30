import { writable } from 'svelte/store';
export const emptyTransaction = {
    amount: 0,
    iban: "",
    recipient: "",
    tan: 0
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
//# sourceMappingURL=bankingForm.js.map