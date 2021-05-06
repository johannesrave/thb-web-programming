<script lang="ts">
    import '../app.css';
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
    import Nav from "../lib/Nav.svelte";

    let host = '';
    onMount(() => {
        host = document.location.host;
    })

</script>

<main class="w-screen h-screen flex justify-center">
    <Nav></Nav>

    <div>
        <h1>Willkommen beim Digitalen Ticketverkauf DTV!</h1>
    </div>

    <slot class="w-full"/>

    <footer class="self-end grid grid-flow-row justify-center">
        <h1>The path is set to {base}</h1>
        <h1>The location is at {host}</h1>
    </footer>
    <div class="gap"></div>
</main>

<style>
    main {
        /*grid-template-rows: min-content min-content 1fr min-content min-content;*/
        /*grid-template-columns: 1fr;*/
        /*background-image: url("/static/img/Patagotitan.1K.JPG");*/
    }
</style>
