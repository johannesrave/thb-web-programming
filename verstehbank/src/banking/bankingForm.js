import { writable } from 'svelte/store';
export const emptyTransaction = {
    amount: 0,
    iban: '',
    bank: '',
    recipient: '',
    tan: 0
};
export const transactionForm = writable(emptyTransaction);
//# sourceMappingURL=bankingForm.js.map