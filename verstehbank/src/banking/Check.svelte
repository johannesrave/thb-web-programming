<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from "$lib/ButtonGroup.svelte";
    import { bankingState } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";

    let toSuccess = () => {
        $bankingState = 'success';
    };

    let goBack = () => {
        $bankingState = 'enterTAN';
    }
</script>


<h2>Kontrolle</h2>


<form on:submit|preventDefault>
    <div>
        <p>{$bankingState}</p>
        <p>{$transactionForm.recipient}</p>
        <p>{$transactionForm.iban}</p>
        <p>{$transactionForm.amount}</p>
        <p>{$transactionForm.tan}</p>
    </div>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={goBack}>Zurück</button>
        <button on:click|preventDefault={toSuccess}>Abschicken</button>
    </ButtonGroup>
</form>

