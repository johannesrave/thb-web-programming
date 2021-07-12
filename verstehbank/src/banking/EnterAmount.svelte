<script lang="ts">
    import { back, next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Button from '$lib/Button.svelte';

    // TODO: aktuellen kontostand zum verlgeich einblenden
    // TODO: custom validity basierend auf verfügbarem kontostand setzen
</script>


<h2>Betrag</h2>
<form on:submit|preventDefault={next}>
    <Input bind:value={$transactionForm.amount}
           id="amount" type="number" label="Betrag" rightJust="true" currency="true"/>
</form>
<ButtonGroup>
    <Button label="Zurück" on:click={back} icon="arrow-left" loc="l"/>
    <Button label="Weiter" on:click={next}/>
</ButtonGroup>
