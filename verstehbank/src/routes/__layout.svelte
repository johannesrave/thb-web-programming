<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';
    import { loggedIn } from '$login/auth';
    import { initialize } from '../persistence'
    import Login from '$login/Login.svelte';

    onMount(() => {
        initialize();
    })

</script>

<main>

    {#if (!$loggedIn)}
        <Login/>
    {:else}
        <Header/>
        <slot/>
    {/if}

</main>


<style>
    main {
        display: flex;
        flex-flow: column;
        flex: 1;
        height: 100%;
        width: 100%;
        border: solid blue;

        overflow: hidden;

        justify-content: center;
        align-items: center;

        /*padding: 0 10%;*/
    }
</style>
