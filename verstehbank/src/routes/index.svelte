<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { user } from '$login/auth';
    import { onMount } from 'svelte';
    import { pageTitle } from '../util/pageTitle';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';

    onMount(() => {
        $pageTitle = 'Übersicht';
    })

    const gotoBanking = () => {
        goto(rootRelative('/banking'));
    }
</script>

<FormLayout>
    <h2 slot="subheader">Ihr Kontostand</h2>

    <form slot="input" on:submit|preventDefault>
        <h3>{$user}</h3>
    </form>
    <ButtonGroup slot="button-group" column="true">
        <Button label="Überweisung" on:click={gotoBanking}/>
        <Button label="Umsätze" muted="true"/>
<!--        <button on:click|preventDefault={gotoBanking}>Überweisung</button>-->
    </ButtonGroup>
</FormLayout>