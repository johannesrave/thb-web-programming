<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from "$lib/ButtonGroup.svelte";
    import { next, back } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";

</script>

<h2>Kontrolle</h2>

<form on:submit|preventDefault>
    <div>
        <p>{$transactionForm.recipient}</p>
        <p>{$transactionForm.iban}</p>
        <p>{$transactionForm.amount}</p>
        <p>{$transactionForm.tan}</p>
    </div>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={back}>Zurück</button>
        <button on:click|preventDefault={next}>Abschicken</button>
    </ButtonGroup>
</form>

