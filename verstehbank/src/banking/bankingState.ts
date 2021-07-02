import { writable } from 'svelte/store';

export const bankingState = writable("selectRecipient");

export const enum steps {
    selectRecipient,
    enterRecipient,
    enterAmount,
    enterTAN,
    success,
    failure
}

type bankingStates =
    "selectRecipient" |
    "enterRecipient" |
    "enterAmount" |
    "enterTAN" |
    "check" |
    "success"