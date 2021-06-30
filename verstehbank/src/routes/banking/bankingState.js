import { writable } from 'svelte/store';
export const bankingState = writable("selectRecipient");
export var steps;
(function (steps) {
    steps[steps["selectRecipient"] = 0] = "selectRecipient";
    steps[steps["enterRecipient"] = 1] = "enterRecipient";
    steps[steps["enterAmount"] = 2] = "enterAmount";
    steps[steps["enterTAN"] = 3] = "enterTAN";
    steps[steps["success"] = 4] = "success";
    steps[steps["failure"] = 5] = "failure";
})(steps || (steps = {}));
//# sourceMappingURL=bankingState.js.map