<script lang="ts">
    // import Header from '$lib/Header/index.svelte';
    import '../app.css';
    import Footer from "../lib/Footer.svelte";
    import { user, userDB } from "$lib/stores";
    import { onDestroy, onMount } from "svelte";
    // import Auth from "$lib/Auth.svelte";
    // import { base } from "$app/paths";

    onMount(() => {
        console.log("restoring from localStorage");
        userDB.restore();
        user.sync();
    })

    onDestroy(() => {
        console.log("saving to localStorage");
        userDB.store()
    })

</script>

<!--<base href="{base}">-->


<main>
    <section>
        <slot/>

    </section>

    <Footer/>
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
        /*border: solid #9f0d56;*/
    }
</style>
