<script lang="ts">
import ScrollableList from "../../lib/ScrollableList.svelte";
    import { contacts, activeContact } from './contacts'

    let goToAmount = () => {
    }

    function selectContact(e, contact) {}
</script>

<h2>Empfänger</h2>
<form>
    <ScrollableList>
        {#each $contacts as contact}
            <div on:click={(e) => selectContact(e,contact)}
                 class="option {contact.createNewContact ? 'selected' : ''}">
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