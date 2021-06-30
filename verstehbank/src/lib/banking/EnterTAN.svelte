<script lang="ts">
    import { bankingState } from "../../routes/banking/bankingState";
    import { transactionForm } from "../../routes/banking/bankingForm";
    import Input from "../Input.svelte";
    import ButtonGroup from "../ButtonGroup.svelte";

    let generatedTAN : number;

    let goToCheck = () => {
        console.log($transactionForm.tan, generatedTAN)
        if($transactionForm.tan == generatedTAN){
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
<form on:submit={goToCheck}>
    <ButtonGroup>
        <button on:click|preventDefault={generateTAN}>SMS mit Zahlencode schicken</button>
    </ButtonGroup>
    <Input bind:value={$transactionForm.tan}>TAN</Input>
    <ButtonGroup>
        <button on:click|preventDefault>Zurück</button>
        <button on:click|preventDefault={goToCheck}>Weiter</button>
    </ButtonGroup>
</form>

