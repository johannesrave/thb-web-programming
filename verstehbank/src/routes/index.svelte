<script lang="ts">
    import Title from "../lib/Title.svelte";
    import RoundButton from "../lib/RoundButton.svelte";
</script>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>


<section>
    <div class="button-bar">
        <RoundButton link={'/banking'} name={'Online Banking'}/>
        <RoundButton link={'/info'} name={'Info'}/>
    </div>
</section>

<Title>Onlinebanking für Menschen.</Title>

<style>
    section {
        min-height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        flex: 1 1 auto;
    }

    .button-bar {
        display: flex;
        gap: 5vw;

    }
</style>
