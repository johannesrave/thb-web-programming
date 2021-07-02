<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';
    import { loggedIn } from '$login/auth';
    import { initialize } from '$util/persistence'
    import Login from '$login/Login.svelte';
    import { pageTitle } from '$util/pageTitle';

    onMount(() => {
        initialize();
    })

</script>

<Header/>


<main>
    <h1>{$pageTitle}</h1>
    {#if (!$loggedIn)}
        <Login/>
    {:else}
        <slot/>
    {/if}
</main>


<style>
    main {
        display: grid;
        /*flex-flow: column;*/
        /*flex: 1;*/
        height: 100%;
        width: 100%;
        /*max-width: 480px;*/

        /*margin: auto;*/
        padding: 0 10%;

        justify-content: center;
        align-items: center;
        align-content: center;
        justify-items: center;
        /*overflow: hidden;*/
    }
    h1 {
        width: 100%;
        text-align: center;
    }
</style>
