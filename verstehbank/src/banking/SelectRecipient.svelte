<script lang="ts">
    import ScrollableList from '$lib/ScrollableList.svelte';
    import { contacts } from '$banking/contacts'
    import { bankingState, next, back } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';

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

<FormLayout>
    <h2 slot="subheader">Empfänger</h2>
    <form slot="input" on:submit|preventDefault>
        <ScrollableList>
            <div on:click={() => {
            selectedContact = false;
            $transactionForm.recipient = '';
            $transactionForm.iban = '';

        }} class="option" class:selected={!selectedContact}>
                Neuer Empfänger
            </div>

            {#each $contacts as contact}
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
    <ButtonGroup slot="button-group">
        <Button label="Abbrechen" on:click={() => goto(rootRelative('/'))}/>
        <Button label="Weiter" on:click={goToAmount}/>
<!--        <button type="button" on:click|preventDefault={() => goto(rootRelative('/'))}>Abbruch</button>-->
<!--        <button on:click|preventDefault={goToAmount}>Weiter</button>-->
    </ButtonGroup>
</FormLayout>
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