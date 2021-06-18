<script lang="ts">
    import Title from "../lib/Title.svelte";
    import RoundButton from "../lib/RoundButton.svelte";
</script>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Onlinebanking für Menschen.</Title>

<RoundButton link={'/login'} name={'Anmelden'}/>
