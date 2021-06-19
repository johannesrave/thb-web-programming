<script lang="ts">
    export let title = 'TODO';

</script>

<svelte:head>
    <title>Verstehbank - {title}</title>
</svelte:head>

<h1>{title}</h1>

<style>
    h1 {
        top: 16px;
        max-width: 80vw;
        position: fixed;
        text-align: center;
    }
</style>