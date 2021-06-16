<script lang="ts">
    // import Header from '$lib/Header/index.svelte';
    import '../app.css';
    import Footer from "../lib/Footer.svelte";
</script>

<section>
    <main>
        <slot/>
    </main>

    <Footer />
</section>


<style>
    section {
        display: flex;
        flex-flow: column;
        flex: 1;
        height: 100%;
        border: solid blue;
        overflow: hidden;
    }

    main {
        display: flex;
        flex-flow: column;
        flex: 1;

        justify-content: center;
        align-items: center;
        border: solid #9f0d56;
    }
</style>
