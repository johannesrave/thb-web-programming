<script lang="ts">
    import { bankingState } from "../../routes/banking/bankingState";
    import { transactionForm } from "../../routes/banking/bankingForm";
    import Input from "../Input.svelte";
    import ButtonGroup from "../ButtonGroup.svelte";

    let goToTAN = () => {
        $bankingState = 'enterTAN';
    }

    let goBack = () => {
        $bankingState = 'selectRecipient';
    }
</script>

<h2>Betrag</h2>

<form on:submit|preventDefault={goToTAN}>
    <Input bind:value={$transactionForm.amount}>Betrag</Input>
    <ButtonGroup>
        <button on:click|preventDefault={goBack}>Zurück</button>
        <button on:click|preventDefault={goToTAN}>Weiter</button>
    </ButtonGroup>
</form>

