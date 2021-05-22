<script lang="ts">
    import Nav from "$lib/Nav.svelte";
</script>

<div class="w-screen h-screen grid grid-cols-1 place-content-center place-items-center">

    <div id="main-content" class="w-screen h-screen overflow-hidden">
        <slot/>
    </div>

    <div id="main-menu" class="w-screen h-screen">
        <Nav/>
    </div>
</div>

<style>
    #main-menu {
        grid-area: 1 / 1;
    }

    #main-content {
        grid-area: 1 / 1;
    }
</style>