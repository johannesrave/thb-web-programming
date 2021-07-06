<script lang="ts">
    import '../../app.css';
</script>

<main>
    <slot/>
</main>


<style>
    main {
        display: grid;
        height: 100vh;
        width: 100%;
        place-items: center;
        /*grid-auto-rows: 64px auto;*/
    }

</style>
