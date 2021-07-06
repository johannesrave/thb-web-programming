<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';
</script>

<FormLayout>
    <h2 slot="subheader">Empfänger</h2>

    <form slot="input" on:submit|preventDefault={() => next()}>
        <Input bind:value={$transactionForm.recipient} id="recipient" label="Empfänger"/>
        <Input bind:value={$transactionForm.iban} id="iban" label="IBAN"/>
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Zurück" on:click={back}/>
        <Button label="Weiter" on:click={next}/>
<!--        <button type="button" on:click|preventDefault={() => back()}>Zurück</button>-->
<!--        <button on:click|preventDefault={() => next()}>Weiter</button>-->
    </ButtonGroup>
</FormLayout>