<script lang="ts">
    import { bankingState } from "../../routes/banking/bankingState";
    import { transactionForm } from "../../routes/banking/bankingForm";
    import Input from "../Input.svelte";
    import ButtonGroup from "../ButtonGroup.svelte";

    let goToAmount = () => {
        $bankingState = 'enterAmount';
    }

    let goBack = () => {
        $bankingState = 'selectRecipient';
    }
</script>

<h2>Empfänger</h2>

<form on:submit={goToAmount}>
    <Input bind:value={$transactionForm.recipient}>Empfängername</Input>
    <Input bind:value={$transactionForm.iban}>IBAN</Input>
    <ButtonGroup>
        <button on:click|preventDefault={goBack}>Zurück</button>
        <button on:click|preventDefault={goToAmount}>Weiter</button>
    </ButtonGroup>
</form>

