<script lang="ts">
    import ScrollableList from "../../lib/ScrollableList.svelte";
    import { contacts, activeContact } from './contacts'
    import { bankingState } from "./bankingState";
    import { transactionForm } from "./bankingForm";

    let goToAmount = () => {
        if ($activeContact.createNewContact) {
            $bankingState = 'enterRecipient';
        }

        $bankingState = 'enterAmount';
        $transactionForm.recipient = $activeContact.name;
    }

</script>

<h2>Empfänger</h2>
<form>
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
    <button on:click|preventDefault>Abbruch</button>
    <button on:click|preventDefault={goToAmount}>Weiter</button>
</form>