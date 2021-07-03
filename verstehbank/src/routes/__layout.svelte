<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';
    import { loggedIn } from '$login/auth';
    import Login from '$login/Login.svelte';
    import { initialize } from '$util/persistence'
    import { pageTitle } from '$util/pageTitle';
    import LoginNeeded from '$login/LoginNeeded.svelte';

    onMount(() => {
        initialize();
    })

</script>
<LoginNeeded/>

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
        height: 100%;
        width: 100%;
        padding: 0 10%;

        justify-content: center;
        align-items: center;
        align-content: center;
        justify-items: center;
    }
    h1 {
        width: 100%;
        text-align: center;
    }
</style>
