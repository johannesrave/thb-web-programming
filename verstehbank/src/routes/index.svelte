<script lang="ts">
    import Title from "$lib/Title.svelte";
    import ButtonGroup from "../lib/ButtonGroup.svelte";
    import { user } from "../lib/auth";
    import { base } from '$app/paths'
    import { goto } from '$app/navigation';


    const gotoBanking = () => {
        goto(base + '/banking');
    }
</script>

<Title title={"Übersicht"}/>

<form on:submit|preventDefault>
    <h2>Ihr Kontostand</h2>
    <h3>{$user}</h3>

    <ButtonGroup>
        <button on:click|preventDefault={gotoBanking}>Überweisung</button>
    </ButtonGroup>
</form>

