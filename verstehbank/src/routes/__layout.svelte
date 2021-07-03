<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';
    import { initialize } from '$util/persistence'
    import { pageTitle } from '$util/pageTitle';
    import { goto, rootRelative } from '$util/navigation';
    import { loggedIn } from '$login/auth';
    import { page } from '$app/stores';
    import { browser } from '$app/env';

    onMount(() => {
        initialize();
    })

    $: if ((!$loggedIn) && ($page.path !== '/login') && browser) {
        goto(rootRelative('/login'));
        console.log("Not authenticated, going back to login.");
    }
</script>

<Header/>
<main>
    <h1>{$pageTitle}</h1>
    <slot/>
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
