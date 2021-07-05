<script lang="ts">
    import { back, next } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";
    import Input from "$lib/Input.svelte";
    import ButtonGroup from "$lib/ButtonGroup.svelte";
</script>

<h2>Betrag</h2>

<form on:submit|preventDefault={next}>
<!--    <Input bind:value={$transactionForm.amount}>Betrag</Input>-->
    <Input bind:value={$transactionForm.amount} id="amount" type="number" label="Betrag"/>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={back}>Zurück</button>
        <button on:click|preventDefault={next}>Weiter</button>
    </ButtonGroup>
</form>

