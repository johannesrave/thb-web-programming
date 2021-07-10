<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Button from '$lib/Button.svelte';

    const euroFormat = new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'EUR',});
    let formattedAmount;

    // formattierung in Euro inspiriert von
    // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
    $: formattedAmount = euroFormat.format($transactionForm.amount);

</script>

<h2>Kontrolle</h2>
<form on:submit|preventDefault>
    <p>Sind diese Angaben korrekt?</p>
    <div class="shadow-small card">
        <div>
            <p class="header">Empfänger:</p>
            <p class="recipient">{$transactionForm.recipient}</p>
        </div>
        <div>
            <p class="header">IBAN:</p>
            <p class="iban">{$transactionForm.iban}</p>
        </div>
        <div>
            <p class="header">Betrag:</p>
            <p class="amount">{formattedAmount}</p>
        </div>
    </div>
</form>
<ButtonGroup>
    <Button label="Zurück" on:click={back}/>
    <Button label="Weiter" on:click={next}/>
</ButtonGroup>

<style>
    .header {
        color: var(--muted-color);
        font-weight: 500;
    }

    .recipient, .iban, .amount {
        font-size: 1.5rem;
    }

    .amount {
        text-align: center;
        font-weight: 600;
    }
</style>