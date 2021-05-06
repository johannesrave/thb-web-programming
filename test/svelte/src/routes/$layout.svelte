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

<main class="w-screen h-screen grid grid-cols-1">
    <Nav>

    </Nav>

    <slot/>

    <footer>
        <h1>The path is set to {base}</h1>
        <h1>The location is at {host}</h1>
    </footer>
    <div class="gap"></div>
</main>

<style>
    main {
        /*grid-template-rows: min-content min-content 1fr min-content min-content;*/
    }
</style>
