<script lang="ts">
    import ScrollableList from "$lib/ScrollableList.svelte";
    import { contacts, activeContact } from '$banking/contacts'
    import { bankingState } from "$banking/bankingState";
    import { transactionForm } from "$banking/bankingForm";
    import { goto, rootRelative } from "$util/navigation";
    import ButtonGroup from "$lib/ButtonGroup.svelte";

    let goToAmount = () => {
        if ($activeContact.createNewContact) {
            $bankingState = 'enterRecipient';
            return;
        }

        $bankingState = 'enterAmount';
        $transactionForm.recipient = $activeContact.name;
        $transactionForm.iban = $activeContact.iban;
    }


    let toDashboard = () => {
        goto(rootRelative('/'));
    };

</script>

<h2>Empfänger</h2>
<form on:submit|preventDefault>
    <ScrollableList>
        {#each $contacts as contact}
            <div on:click={() => $activeContact = contact}
                 class="option" class:selected={contact.name === $activeContact.name}>

                {contact.name}
                {#if !contact.createNewContact}
                    <br>{contact.bank}
                    <br>{contact.iban}
                {/if}

            </div>
        {/each}
    </ScrollableList>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={toDashboard}>Abbruch</button>
        <button on:click|preventDefault={goToAmount}>Weiter</button>
    </ButtonGroup>
</form>

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