<script lang="ts">
    import '../app.css';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';
    import { initialize } from '$util/persistence'
    import { pageTitle } from '$util/pageTitle';
    import { goto, rootRelative } from '$util/navigation';
    import { loggedIn } from '$login/auth';
    import { page } from '$app/stores';

    let finishedMounting: boolean = false;

    onMount(() => {
        initialize();
        finishedMounting = true;
    })

    $: if (finishedMounting && !$loggedIn && $page.path !== '/login') {
        goto(rootRelative('/login'));
        console.log('Not authenticated, going back to login.');
    }
</script>

<main>
    <h1>{$pageTitle}</h1>

    <slot/>

    <Header/>
</main>


<style>
    main {
        display: grid;
        height: 100vh;
        width: 100%;
        place-items: center;
        grid-auto-rows: 64px auto;
    }

    h1 {
        font-size: var(--font-medium);
        font-weight: 520;
        color: var(--muted-color);
        align-self: end;
    }
</style>
