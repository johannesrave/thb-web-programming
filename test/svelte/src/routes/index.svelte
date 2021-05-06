<script lang="ts">
    import Card from "../lib/Card.svelte";
</script>

<main class="w-full h-full
    grid grid-cols-8 grid-rows-8
    items-center
    gap-8">
    <h1 class="col-span-full justify-self-center">BUY YOUR SAURO-PET TODAY!</h1>

    <div class="w-full h-full col-span-2 col-start-2 row-span-7">
        <Card title="Tyrannosaurus"/>
    </div>
    <div class="w-full h-full col-span-2 col-start-4 row-span-7">
        <Card title="Stegosaurus"/>
    </div>
    <div class="w-full h-full col-span-2 col-start-6 row-span-7">
        <Card title="Triceratops"/>
    </div>
</main>

<style>
    main {
        /*grid: min-content 1fr / repeat(3, 240px);*/
    }
</style>