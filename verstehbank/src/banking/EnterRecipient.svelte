<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { bankingState, next, back } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";
    import Input from "$lib/Input.svelte";
    import ButtonGroup from "$lib/ButtonGroup.svelte";

    let goToAmount = () => {
        $bankingState = 'enterAmount';
    }

    let goBack = () => {
        $bankingState = 'selectRecipient';
    }
</script>

<h2>Empfänger</h2>

<form on:submit|preventDefault={goToAmount}>
    <Input bind:value={$transactionForm.recipient}>Empfängername</Input>
    <Input bind:value={$transactionForm.iban}>IBAN</Input>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={() => back()}>Zurück</button>
        <button on:click|preventDefault={() => next()}>Weiter</button>
    </ButtonGroup>
</form>



<!--
<form on:submit|preventDefault={goToAmount}>
    <Input bind:value={$transactionForm.recipient}>Empfängername</Input>
    <Input bind:value={$transactionForm.iban}>IBAN</Input>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={goBack}>Zurück</button>
        <button on:click|preventDefault={goToAmount}>Weiter</button>
    </ButtonGroup>
</form>
-->

