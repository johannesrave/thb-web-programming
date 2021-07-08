<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Button from '$lib/Button.svelte';

</script>

<h2>Kontrolle</h2>
<form on:submit|preventDefault>
    <div>
        <p>{$transactionForm.recipient}</p>
        <p>{$transactionForm.iban}</p>
        <p>{$transactionForm.amount}</p>
        <p>{$transactionForm.tan}</p>
    </div>
</form>
<ButtonGroup>
    <Button label="Zurück" on:click={back}/>
    <Button label="Absenden" on:click={next}/>
</ButtonGroup>
