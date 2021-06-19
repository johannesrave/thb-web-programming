<script lang="ts">
    import Title from "../lib/Title.svelte";
    import RoundButton from "../lib/RoundButton.svelte";
    import Auth from "../lib/Auth.svelte";
    import { base } from '$app/paths'

    const bankingURL = base + '/banking';
    const contactsURL = base + '/contacts';
</script>

<Auth/>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Übersicht</Title>

<RoundButton link={base + '/banking'} name={'Geld senden'}/>
<RoundButton link={base + '/contacts'} name={'Kontakte pflegen'}/>

{#if false}
    <slot/>
{/if}