<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import FormLayout from '$lib/FormLayout.svelte';
    import Button from '$lib/Button.svelte';
    import { IBAN } from 'ibankit';

    let recipient: string = '';
    let recipientError: string = 'Bitte geben Sie den Namen des Empfängers ein.';
    let iban: string = '';
    let ibanError: string = 'Bitte geben Sie die IBAN des Empfängers ein.';

    const validateRecpient = () => {
        console.log('Validating recipient.')
        if (recipient === '') {
            recipientError = 'Bitte geben Sie den Namen des Empfängers ein.';
        } else if (recipient.length > 64) {
            recipientError = 'Der Empfängername darf nicht länger als 64 Zeichen sein.';
        } else {
            recipientError = '';
        }
        console.log(recipientError);
    }

    const validateIBAN = () => {
        console.log('Validating IBAN.')
        const trimmedIBAN = iban.replace(/\s+/g, ''); // Remove whitespace from IBAN.
        if (trimmedIBAN === '') {
            ibanError = 'Bitte geben Sie die IBAN des Empfängers ein.';
        }
        else if (!IBAN.isValid(trimmedIBAN)) {
            ibanError = 'Bitte prüfen Sie die eingegebene IBAN.';
        } else {
            ibanError = '';
        }
        console.log(ibanError);
    }

    const submit = () => {
        if (recipientError === '' && ibanError === ''){
            $transactionForm.recipient = recipient;
            $transactionForm.iban = iban;
            next();
        }
    }

</script>

<FormLayout>
    <h2 slot="subheader">Empfänger</h2>

    <form slot="input" on:submit|preventDefault={submit}>
        <Input bind:value={recipient} on:blur={validateRecpient} error={recipientError}
               id="recipient" label="Empfänger"/>
        <Input bind:value={iban} on:blur={validateIBAN} error={ibanError}
               id="iban" label="IBAN"/>
<!--        <Input bind:value={$transactionForm.iban} on:blur={validateIBAN} id="iban" label="IBAN"/>-->
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Zurück" on:click={back}/>
        <Button label="Weiter" on:click={submit}/>
    </ButtonGroup>
</FormLayout>