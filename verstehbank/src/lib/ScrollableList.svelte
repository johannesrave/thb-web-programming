<script lang="ts">
    import { contacts, selectedContact } from '$lib/./stores'

    console.log($contacts)

    let selectContact;

</script>

<form>
    <select name="fruit" multiple>
    {#each $contacts as contact}
        <label for={contact.name}></label>

<!--            <h3>{contact.name}</h3>-->
<!--            <p>{contact.bank}</p>-->
<!--            <p>{contact.iban}</p>-->
<!--            <input type="radio" id="{contact.name}" name="contact"-->
<!--                   on:click={-->
<!--                    event => {-->
<!--                    let item = event.currentTarget;-->
<!--                    $selectedContact = contact}-->
<!--             }>-->
        <option value={contact.name}  id="{contact.name}">
            {contact.name}<br>
            {contact.bank}<br>
            {contact.iban}
        </option>
    {/each}
    </select>
</form>

<style>
    ul {
        height: 200px;
        overflow: scroll;
    }
</style>