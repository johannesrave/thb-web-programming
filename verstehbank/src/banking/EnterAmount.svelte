<script lang="ts">
    import { back, next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import FormLayout from '../lib/FormLayout.svelte';
</script>


<FormLayout>
    <h2 slot="subheader">Betrag</h2>

    <form slot="input" on:submit|preventDefault={next}>
        <!--    <Input bind:value={$transactionForm.amount}>Betrag</Input>-->
        <Input bind:value={$transactionForm.amount} id="amount" type="number" label="Betrag"/>
    </form>

    <ButtonGroup slot="button-group">
        <button type="button" on:click|preventDefault={back}>Zurück</button>
        <button on:click|preventDefault={next}>Weiter</button>
    </ButtonGroup>

</FormLayout>

