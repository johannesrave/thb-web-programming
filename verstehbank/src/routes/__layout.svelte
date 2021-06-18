<script lang="ts">
    // import Header from '$lib/Header/index.svelte';
    import '../app.css';
    import Footer from "../lib/Footer.svelte";
    import { users } from "$lib/stores";
    import { onDestroy, onMount } from "svelte";

    onMount(() => {
        users.restore();
    })

    onDestroy(() => {
        users.store()
        }
    )

</script>

<main>
    <section>
        <slot/>
        {#if false}
            <slot/>
        {/if}
    </section>

    <Footer/>
</main>


<style>
    main {
        display: flex;
        flex-flow: column;
        flex: 1;
        height: 100%;
        border: solid blue;
        overflow: hidden;
    }

    section {
        display: flex;
        flex-flow: column;
        flex: 1;

        justify-content: center;
        align-items: center;
        border: solid #9f0d56;
    }
</style>
