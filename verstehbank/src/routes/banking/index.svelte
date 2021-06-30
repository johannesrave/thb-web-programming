<script lang="ts">
    import Auth from '$lib/Auth.svelte';
    import Title from '$lib/Title.svelte';
    import SelectRecipient from "$lib/banking/SelectRecipient.svelte";
    import EnterRecipient from "$lib/banking/EnterRecipient.svelte";
    import EnterAmount from "$lib/banking/EnterAmount.svelte";
    import EnterTAN from "$lib/banking/EnterTAN.svelte";
    import Check from "$lib/banking/Check.svelte";
    import Success from "$lib/banking/Success.svelte";
    import {bankingState} from "./bankingState";

    const bankingStates = {
        selectRecipient : SelectRecipient,
        enterRecipient : EnterRecipient,
        enterAmount : EnterAmount,
        enterTAN : EnterTAN,
        check : Check,
        success : Success,
    };
</script>

<Auth/>
<Title title={"Überweisung"}/>

<svelte:component this={bankingStates[$bankingState]}/>

<style>
    div, form {
        display: flex;
        flex-flow: column;
    }

    form {
        gap: 16px;
        align-items: center;
    }

</style>