<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { initialize } from '$util/persistence'
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
    <slot/>
</main>

<style>
    main {
        display: grid;
        height: 100vh;
        width: 100vw;
        align-items: end;
        justify-items: center;
        grid-template-rows: auto min-content;
    }
</style>
