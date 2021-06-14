<script lang="ts">
    // import Counter from '$lib/Counter/index.svelte';
</script>

<svelte:head>
    <title>Verstehbank</title>
</svelte:head>

<section>
    <h1>Onlinebanking für Menschen.</h1>

    <div class="center-cluster">
        <h2>Willkommen bei der Verstehbank.</h2>
        <div class="button-bar">
            <a href="/banking">ONLINE BANKING</a>
            <a href="/info">INFO</a>
        </div>
    </div>
</section>

<style>
    section {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /*flex: 0;*/
        flex: 1 1 auto;
    }

    .center-cluster {
        min-height: 100%;
        display: flex;
        flex-flow: column;
        /*justify-content: space-around;*/
        flex: 1 1 auto;
    }

    .button-bar {
        display: flex;
        align-content: space-around;
        gap: 32px;
    }
</style>
