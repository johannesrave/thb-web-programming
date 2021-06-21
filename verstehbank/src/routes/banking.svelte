<script lang="ts">
    import Title from '$lib/Title.svelte';
    import Auth from '$lib/Auth.svelte';
    import ScrollableList from "$lib/ScrollableList.svelte";
    import { contacts, selectedContact } from '$lib/./stores'
    import Input from "../lib/Input.svelte";

    const enum steps {
        selectRecipient,
        enterRecipient,
        enterAmount,
        enterTAN,
        success,
        failure
    }

    let step = steps.selectRecipient;
    let name: string;
    let iban: string;
    let amount: number;
    let tan: number;

    let createNewContact: boolean = false;

    const enterRecipient = () => {
        if (name && iban) step = steps.enterAmount;
    }
    const enterAmount = () => {
        if (amount) step = steps.enterTAN;
    }
    const enterTAN = () => {
        if (tan) step = steps.success;
    }
    const success = () => {
        step = steps.selectRecipient;
    }

    let selectRecipient = () => {
        step = steps.enterRecipient;
        if (!createNewContact) {
            name = $selectedContact.name;
            iban = $selectedContact.iban;
        }
    }

    function makeSelected(element) {
        for (let el of document.getElementsByClassName("selected")) {
            el.classList.remove("selected")
        }
        element.classList.add("selected")
    }

    const selectContact = (event, contact) => {
        createNewContact = false;
        $selectedContact = contact;

        makeSelected(event.currentTarget);
        console.log(event.currentTarget)
        console.log($selectedContact);
    }
</script>

<Auth/>
<Title title={"Geld senden"}/>

{#if step === steps.selectRecipient}

    <form on:submit={selectRecipient}>
        <h2>Wem möchten Sie Geld überweisen?</h2>
        <ScrollableList>
            <div on:click={createNewContact = true} class="option selected">
                >> Neuer Überweisungsempfänger
            </div>
            {#each $contacts as contact}
                <div on:click={(e) => selectContact(e,contact)} class="option">
                    {contact.name}<br>
                    {contact.bank}<br>
                    {contact.iban}
                </div>
            {/each}
        </ScrollableList>
        <button>Weiter</button>
    </form>

{:else if step === steps.enterRecipient}

    <form on:submit={enterRecipient}>
        <h2>Wem möchten Sie Geld überweisen?</h2>
        <Input bind:value={name}>Empfängername</Input>
        <Input bind:value={iban}>IBAN</Input>
        <button type="button" on:click={step = steps.selectRecipient}>Zurück</button>
        <button>Zum Betrag</button>
    </form>

{:else if step === steps.enterAmount}

    <form on:submit={enterAmount}>
        <h2>Welchen Betrag möchten Sie überweisen?</h2>
        <Input bind:value={amount}>Betrag</Input>
        <button>Zur Freigabe</button>
    </form>

{:else if step === steps.enterTAN}

    <form on:submit={enterTAN}>
        <h2>Wie lautet die TAN (Zahlencode) aus der SMS?</h2>
        <Input bind:value={tan}>TAN</Input>
        <button>Überweisung abschicken</button>
    </form>
{:else if step === steps.success}

    <form on:submit={success}>
        <h2>Ihre Überweisung wurde erfolgreich abgeschickt.</h2>
        <button>Weitere Überweisung</button>
        <a href="/">Zurück zur Übersicht</a>
    </form>

{/if}


<style>
    div, form {
        display: flex;
        flex-flow: column;
    }

    form {
        gap: 16px;
        align-items: center;
    }

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