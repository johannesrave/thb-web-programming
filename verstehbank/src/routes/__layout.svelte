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
        display: flex;
        height: 100vh;
        width: 100vw;
        place-content: center;
        place-items: center;
        /*align-items: end;*/
        /*justify-items: center;*/
        grid-template-rows: 1fr min-content;

        background-image: url("../img/pexels-douglas-kugler-4017228.jpg");
        background-repeat:no-repeat;
        background-position: center center;
    }
</style>
