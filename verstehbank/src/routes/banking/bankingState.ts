import { writable } from 'svelte/store';
import SelectRecipient from './SelectRecipient.svelte';
import EnterRecipient from './EnterRecipient.svelte';
import EnterAmount from './EnterAmount.svelte';
import EnterTAN from './EnterTAN.svelte';
import Check from './Check.svelte';

export const bankingState = writable({});

export const enum steps {
    selectRecipient,
    enterRecipient,
    enterAmount,
    enterTAN,
    success,
    failure
}

const options = [
    {selectRecipient : SelectRecipient},
    {enterRecipient : EnterRecipient},
    {enterAmount : EnterAmount},
    {enterTAN : EnterTAN},
    {check : Check},
];