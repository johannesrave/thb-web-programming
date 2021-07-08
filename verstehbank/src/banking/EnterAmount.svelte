<script lang="ts">
    import { back, next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';
</script>


<FormLayout>
    <h2 slot="subheader">Betrag</h2>
    <form slot="input" on:submit|preventDefault={next}>
        <Input bind:value={$transactionForm.amount} id="amount" type="number" label="Betrag" rightJust="true"/>
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Zurück" on:click={back}/>
        <Button label="Weiter" on:click={next}/>
    </ButtonGroup>
</FormLayout>

