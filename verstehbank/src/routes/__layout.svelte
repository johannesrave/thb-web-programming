<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { initialize } from '$util/persistence'
    import { goto, rootRelative } from '$util/navigation';
    import { loggedIn } from '$login/auth';
    import { page } from '$app/stores';
    import background from '$lib/assets/pexels-douglas-kugler-4017228.jpg';


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
    <img src="{background}" alt="Ein Bild vom vom blauen Himmel mit Wolken">
</main>

<style>
    main {
        display: grid;
        height: 100vh;
        width: 100vw;
        justify-items: center;

    }

    img {
        object-fit: cover;
        position: fixed;
        display: block;
        width: 100vw;
        height: 100vh;
        z-index: -5;
    }
</style>
