<script lang="ts">
import ButtonGroup from "../ButtonGroup.svelte";
    import { bankingState } from "../../routes/banking/bankingState";
    import { transactionForm } from "../../routes/banking/bankingForm";

    let toSuccess = () => {
        $bankingState = 'success';
    };

    let goBack = () => {
        $bankingState = 'enterTAN';
    }
</script>


<h2>Kontrolle</h2>


<form>
    <div>
        <p>{$bankingState}</p>
        <p>{$transactionForm.recipient}</p>
        <p>{$transactionForm.iban}</p>
        <p>{$transactionForm.amount}</p>
        <p>{$transactionForm.tan}</p>
    </div>
    <ButtonGroup>
        <button on:click|preventDefault={goBack}>Zurück</button>
        <button on:click|preventDefault={toSuccess}>Abschicken</button>
    </ButtonGroup>
</form>

