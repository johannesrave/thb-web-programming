<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    // import Title from '$lib/Title.svelte';
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

<!--<Title title={"Übersicht"}/>-->

<form on:submit|preventDefault>
    <h2>Ihr Kontostand</h2>
    <h3>{$user}</h3>

    <ButtonGroup>
        <button on:click|preventDefault={gotoBanking}>Überweisung</button>
    </ButtonGroup>
</form>

