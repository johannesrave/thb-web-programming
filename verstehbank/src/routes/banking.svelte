<script lang="ts">
    import { goto } from '$app/navigation';
    import Title from '$lib/Title.svelte';
    import Auth from '$lib/Auth.svelte';
    import ScrollableList from "$lib/ScrollableList.svelte";

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
        step = steps.enterRecipient;
    }

    let selectRecipient = () => {
        name = 'Peter Kopf';
        iban = 'DE6969696969696969'
    }
</script>

<Auth/>
<Title title={"Geld senden"}/>

{#if step === steps.selectRecipient}

    <form on:submit={enterRecipient}>
        <h2>Wem möchten Sie Geld überweisen?</h2>
        <ScrollableList/>
<!--        <button type="button" on:click={selectRecipient}>Empfänger auswählen</button>-->
        <div>
            <label for="name" class="required">Empfängername</label>
            <input bind:value={name} type="text" id="name">
        </div>
        <div>
            <label for="iban" class="required">IBAN</label>
            <input bind:value={iban} type="text" id="iban">
        </div>
        <button>Zum Betrag</button>
    </form>

{:else if step === steps.enterRecipient}

    <form on:submit={enterRecipient}>
        <h2>Wem möchten Sie Geld überweisen?</h2>
        <ScrollableList/>
<!--        <button type="button" on:click={selectRecipient}>Empfänger auswählen</button>-->
        <div>
            <label for="name" class="required">Empfängername</label>
            <input bind:value={name} type="text" id="name">
        </div>
        <div>
            <label for="iban" class="required">IBAN</label>
            <input bind:value={iban} type="text" id="iban">
        </div>
        <button>Zum Betrag</button>
    </form>

{:else if step === steps.enterAmount}

    <form on:submit={enterAmount}>
        <h2>Welchen Betrag möchten Sie überweisen?</h2>
        <div>
            <label for="amount" class="required">Betrag</label>
            <input bind:value={amount} type="number" id="amount">
        </div>
        <button>Zur Freigabe</button>
    </form>

{:else if step === steps.enterTAN}

    <form on:submit={enterTAN}>
        <h2>Wie lautet der Zahlencode aus der SMS?</h2>
        <div>
            <label for="tan" class="required">Betrag</label>
            <input bind:value={tan} type="number" id="tan">
        </div>
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
</style>