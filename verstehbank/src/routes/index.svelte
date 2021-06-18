<script lang="ts">
    import Title from "../lib/Title.svelte";
    import RoundButton from "../lib/RoundButton.svelte";
    import Auth from "../lib/Auth.svelte";
</script>

<Auth/>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Übersicht</Title>

<RoundButton link={'/banking'} name={'Geld senden'}/>
<RoundButton link={'/contacts'} name={'Kontakte pflegen'}/>

{#if false}
    <slot/>
{/if}