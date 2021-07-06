<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';

    import { back } from '$banking/bankingState';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';

    let generatedTAN: number = null;

    let validate = () => {
        if ($transactionForm.tan.toString() === generatedTAN.toString()) {
            console.log('TANs match, proceeding.')
            next();
        }
    }

    let generateTAN = () => {
        let randomNumber = new Uint32Array(1);
        window.crypto.getRandomValues(randomNumber);
        generatedTAN = Number(randomNumber[0].toString().slice(0, 6));

        alert(generatedTAN);
    }
</script>

<FormLayout>
    <h2 slot="subheader">Freigabe</h2>
    <form slot="input" on:submit|preventDefault={validate}>
        <ButtonGroup>
            <Button label="SMS mit Zahlencode schicken" on:click={generateTAN}/>

<!--            <button on:click|preventDefault={generateTAN}>SMS mit Zahlencode schicken</button>-->
        </ButtonGroup>
        <Input bind:value={$transactionForm.tan} id="tan" type="number" label="TAN"/>
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Zurück" on:click={back}/>
        <Button label="Weiter" on:click={validate}/>
<!--        <button type="button" on:click|preventDefault={back}>Zurück</button>-->
<!--        <button on:click|preventDefault={validate}>Weiter</button>-->
    </ButtonGroup>
</FormLayout>