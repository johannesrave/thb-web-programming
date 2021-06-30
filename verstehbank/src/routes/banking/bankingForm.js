import { writable } from 'svelte/store';
const emptyTransaction = {
    amount: 0,
    iban: "",
    recipient: "",
    tan: 0
};
export const transactionForm = writable(emptyTransaction);
//# sourceMappingURL=bankingForm.js.map