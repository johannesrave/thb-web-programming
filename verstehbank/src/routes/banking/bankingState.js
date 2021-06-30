import { writable } from 'svelte/store';
import SelectRecipient from './SelectRecipient.svelte';
import EnterRecipient from './EnterRecipient.svelte';
import EnterAmount from './EnterAmount.svelte';
import EnterTAN from './EnterTAN.svelte';
import Check from './Check.svelte';
export const bankingState = writable({});
export var steps;
(function (steps) {
    steps[steps["selectRecipient"] = 0] = "selectRecipient";
    steps[steps["enterRecipient"] = 1] = "enterRecipient";
    steps[steps["enterAmount"] = 2] = "enterAmount";
    steps[steps["enterTAN"] = 3] = "enterTAN";
    steps[steps["success"] = 4] = "success";
    steps[steps["failure"] = 5] = "failure";
})(steps || (steps = {}));
const options = [
    { selectRecipient: SelectRecipient },
    { enterRecipient: EnterRecipient },
    { enterAmount: EnterAmount },
    { enterTAN: EnterTAN },
    { check: Check },
];
//# sourceMappingURL=bankingState.js.map