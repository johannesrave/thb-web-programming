import SelectRecipient from "$lib/banking/SelectRecipient.svelte";
import EnterRecipient from "$lib/banking/EnterRecipient.svelte";
import EnterAmount from "$lib/banking/EnterAmount.svelte";
import EnterTAN from "$lib/banking/EnterTAN.svelte";
import Check from "$lib/banking/Check.svelte";
import Success from "$lib/banking/Success.svelte";
import { bankingState } from "../../routes/banking/bankingState";
const bankingStates = {
    selectRecipient: SelectRecipient,
    enterRecipient: EnterRecipient,
    enterAmount: EnterAmount,
    enterTAN: EnterTAN,
    check: Check,
    success: Success,
};
export { bankingStates, bankingState };
//# sourceMappingURL=bankingComponents.js.map