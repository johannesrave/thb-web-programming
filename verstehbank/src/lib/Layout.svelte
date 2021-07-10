<script>
    import Nav from "$lib/Nav.svelte";
</script>
<section>
    <div>
        <slot/>
    </div>
    <Nav/>
</section>

<style>
    section {
        height: 100%;
        width: 360px;
        max-width: 100vh;
        display: flex;
        flex-flow: column;
        place-content: center;
        background-color: #ebebeb;
    }

    div {
        padding: 16px;
        min-height: 540px;
        max-height: 600px;
        gap: 16px;
        display: grid;
        place-items: center;
        grid-template-rows: min-content min-content auto min-content;
    }

</style>
