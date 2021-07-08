<script lang="ts">
    import ScrollableList from '$lib/ScrollableList.svelte';
    import { contacts } from '$banking/contacts';
    import { user } from '$login/auth';
    import { bankingState, next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Button from '$lib/Button.svelte';
    import { onMount } from 'svelte';

    let finishedMounting: boolean = false;
    onMount(() => {
        finishedMounting = true;
    })

    let selectedContact = false;

    let goToAmount = () => {

        if (!selectedContact) {
            console.log('Creating new contact, proceeding.');
            next();
            return;
        }
        bankingState.set('enterAmount');
    }
</script>

<h2>Empfänger</h2>
<form on:submit|preventDefault>
    <ScrollableList>
        <div on:click={() => {
            selectedContact = false;
            $transactionForm.recipient = '';
            $transactionForm.iban = '';

        }} class="option" class:selected={!selectedContact}>
            Neuer Empfänger
        </div>

        {#each $contacts[$user.username] as contact}
            <div on:click={() => {
                selectedContact = contact;
                $transactionForm.recipient = selectedContact.name;
                $transactionForm.iban = selectedContact.iban;

            }} class="option" class:selected={contact.name === selectedContact.name}>

                {contact.name}<br>
                {contact.bank}<br>
                {contact.iban}
            </div>
        {/each}
    </ScrollableList>
</form>
<ButtonGroup>
    <Button label="Abbrechen" on:click={() => goto(rootRelative('/'))}/>
    <Button label="Weiter" on:click={goToAmount}/>
</ButtonGroup>

<style>
    .option {
        height: 4em;
        display: flex;
        flex-flow: column;
        justify-content: center;

        border: 1px dotted var(--primary-color);
    }

    .selected {
        color: white;
        background-color: var(--primary-color);
    }
</style>