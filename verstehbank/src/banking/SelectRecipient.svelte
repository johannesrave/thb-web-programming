<script lang="ts">
    import { contacts } from '$banking/accounts';
    import { next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Button from '$lib/Button.svelte';
    import SelectableItem from '$lib/SelectableItem.svelte';
    import ScrollableList from '$lib/ScrollableList.svelte';

    let selectedContact: Contact = {name : '', bank : '', iban : ''};

    function selectItem(contact: Contact) {
        selectedContact = contact;
        $transactionForm.recipient = selectedContact.name;
        $transactionForm.iban = selectedContact.iban;
    }

    type Contact = { name: string, bank: string, iban: string }
</script>

<h2>Empfänger</h2>
<form on:submit|preventDefault>
    {#if ($contacts)}
        <ScrollableList>
            <SelectableItem on:click={() => selectItem({name:'', bank:'', iban:''})}
                            selected={'' === selectedContact.name}>
                <svelte:fragment slot="itemName">Neuen Empfänger anlegen</svelte:fragment>
            </SelectableItem>
            {#each [...$contacts] as contact}
                <SelectableItem on:click={() => selectItem(contact)} selected={contact.name === selectedContact.name}>
                    <svelte:fragment slot="itemName">{contact.name}</svelte:fragment>
                    <svelte:fragment slot="line1">{contact.iban}</svelte:fragment>
                    <svelte:fragment slot="line2">{contact.bank}</svelte:fragment>
                </SelectableItem>
            {/each}
        </ScrollableList>
    {/if}
</form>
<ButtonGroup>
    <Button label="Abbruch" on:click={() => goto(rootRelative('/'))} icon="undo-outline" loc="l" look="cancel"/>
    <Button label="Weiter" on:click={next}/>
</ButtonGroup>