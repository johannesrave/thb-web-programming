import { writable } from 'svelte/store';
import SelectRecipient from '$banking/SelectRecipient.svelte';
import EnterRecipient from '$banking/EnterRecipient.svelte';
import EnterAmount from '$banking/EnterAmount.svelte';
import EnterTAN from '$banking/EnterTAN.svelte';
import Check from '$banking/Check.svelte';
import Success from '$banking/Success.svelte';
export const bankingState = writable('selectRecipient');
export function next() {
    bankingState.update((oldState) => bankingNav[oldState].next);
}
export function back() {
    bankingState.update((oldState) => bankingNav[oldState].back);
}
export const bankingStates = {
    selectRecipient: SelectRecipient,
    enterRecipient: EnterRecipient,
    enterAmount: EnterAmount,
    enterTAN: EnterTAN,
    check: Check,
    success: Success,
};
const bankingNav = {
    selectRecipient: {
        next: 'enterRecipient',
    },
    enterRecipient: {
        back: 'selectRecipient',
        next: 'enterAmount',
    },
    enterAmount: {
        back: 'enterRecipient',
        next: 'check',
    },
    check: {
        back: 'enterAmount',
        next: 'enterTAN',
    },
    enterTAN: {
        back: 'check',
        next: 'success',
    },
    success: {
        back: 'selectRecipient'
    },
};
//# sourceMappingURL=bankingState.js.map