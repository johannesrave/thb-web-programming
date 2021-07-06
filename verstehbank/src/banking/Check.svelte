<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';

</script>

<FormLayout>
    <h2 slot="subheader">Kontrolle</h2>
    <form slot="input" on:submit|preventDefault>
        <div>
            <p>{$transactionForm.recipient}</p>
            <p>{$transactionForm.iban}</p>
            <p>{$transactionForm.amount}</p>
            <p>{$transactionForm.tan}</p>
        </div>
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Zurück" on:click={back}/>
        <Button label="Absenden" on:click={next}/>
<!--        <button type="button" on:click|preventDefault={back}>Zurück</button>-->
<!--        <button on:click|preventDefault={next}>Abschicken</button>-->
    </ButtonGroup>
</FormLayout>