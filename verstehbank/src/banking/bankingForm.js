// imported https://github.com/koblas/ibankit-js to validate IBANs
import { writable } from 'svelte/store';
import 'ibankit';
export const emptyTransaction = {
    amount: 0,
    iban: '',
    recipient: '',
    tan: 0
};
export const transactionForm = writable(emptyTransaction);
//# sourceMappingURL=bankingForm.js.map