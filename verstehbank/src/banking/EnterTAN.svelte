<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { bankingState } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";
    import Input from "$lib/Input.svelte";
    import ButtonGroup from "$lib/ButtonGroup.svelte";

    import { back } from "$banking/bankingState";

    let generatedTAN: number;

    let goToCheck = () => {
        if ($transactionForm.tan === generatedTAN) {
            console.log("TANs match, proceeding.")
            $bankingState = 'check';
        }
    }

    let generateTAN = () => {
        let randomNumber = new Uint32Array(1);
        window.crypto.getRandomValues(randomNumber);
        generatedTAN = Number(randomNumber[0].toString().slice(0, 6));

        alert(generatedTAN);
    }
</script>

<h2>Freigabe</h2>
<form on:submit|preventDefault={goToCheck}>
    <ButtonGroup>
        <button on:click|preventDefault={generateTAN}>SMS mit Zahlencode schicken</button>
    </ButtonGroup>
    <Input bind:value={$transactionForm.tan} id="tan">TAN</Input>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={back}>Zurück</button>
        <button on:click|preventDefault={goToCheck}>Weiter</button>
    </ButtonGroup>
</form>

