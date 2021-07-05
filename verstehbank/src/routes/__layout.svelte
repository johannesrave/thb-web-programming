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
        /*padding: 0 10%;*/

        /*justify-content: center;*/
        /*align-items: center;*/
        /*align-content: center;*/
        justify-items: center;

    }

    h1 {
        width: 100%;
        text-align: center;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section {
        min-width: 320px;
        min-height: 480px;

        display: grid;
        justify-items: center;

        border: blue;
    }
</style>
