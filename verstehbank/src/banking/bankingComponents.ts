import SelectRecipient from "$banking/SelectRecipient.svelte";
import EnterRecipient from "$banking/EnterRecipient.svelte";
import EnterAmount from "$banking/EnterAmount.svelte";
import EnterTAN from "$banking/EnterTAN.svelte";
import Check from "$banking/Check.svelte";
import Success from "$banking/Success.svelte";
import { bankingState } from "$banking/bankingState";

const bankingStates = {
    selectRecipient : SelectRecipient,
    enterRecipient : EnterRecipient,
    enterAmount : EnterAmount,
    enterTAN : EnterTAN,
    check : Check,
    success : Success,
};

export { bankingStates, bankingState };
