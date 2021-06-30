<script lang="ts">
    import '../app.css';
    import Footer from "../lib/Footer.svelte";
    import { onMount } from "svelte";
    import { loggedIn } from '$lib/auth';
    import { initialize } from "$lib/persistence"
    import Login from "$lib/Login.svelte";

    onMount(() => {
        initialize();
        // userDB.retrieve();
        // user.retrieve();
    })

</script>

<main>
    <Footer/>

    <section>
        {#if (!$loggedIn)}
            <Login/>
        {:else}
            <slot/>
        {/if}
    </section>

</main>


<style>
    main {
        display: flex;
        flex-flow: column;
        flex: 1;
        height: 100%;
        /*border: solid blue;*/
        overflow: hidden;
    }

    section {
        display: flex;
        flex-flow: column;
        flex: 1;

        justify-content: center;
        align-items: center;
        padding: 0 10%;
    }
</style>
