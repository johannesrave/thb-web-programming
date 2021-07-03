<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { user } from '$login/auth';
    import { onMount } from "svelte";
    import { pageTitle } from "../util/pageTitle";

    onMount(() => {
        $pageTitle = 'Übersicht';
    })

    const gotoBanking = () => {
        goto(rootRelative('/banking'));
    }
</script>

<h2>Ihr Kontostand</h2>

<form on:submit|preventDefault>
    <h3>{$user}</h3>

    <ButtonGroup>
        <button on:click|preventDefault={gotoBanking}>Überweisung</button>
    </ButtonGroup>
</form>

