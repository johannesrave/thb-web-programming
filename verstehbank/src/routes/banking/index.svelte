<script lang="ts">
    import Title from "../../lib/Title.svelte";
    import RoundButton from "../../lib/RoundButton.svelte";

    let name: string;
    let iban: string;

    const submit = () => {

    }


    let selectUser = () => {

    }
</script>

<Title>Überweisung</Title>
<form on:submit={submit}>
    <h2>An wen soll die Überweisung gehen?</h2>
    <button type="button" on:click={selectUser}>Empfänger auswählen</button>
    <div>
        <label for="name" class="required">Empfängername</label>
        <input bind:this={name} type="text" id="name">
    </div>
    <div>
        <label for="iban" class="required">IBAN</label>
        <input bind:this={iban} type="text" id="iban">
    </div>
    <button type="submit">Weiter</button>
    {#if false}<slot />{/if}
</form>


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

