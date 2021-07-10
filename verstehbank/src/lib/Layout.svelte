<script>
    import Nav from '$lib/Nav.svelte';
    import {page} from '$app/stores';
</script>
<section class="shadow-big">
    <div>
        <slot/>
    </div>
    {#if $page.path !== '/login'}
        <Nav/>
    {/if}
</section>

<style>
    section {
        height: 100%;
        width: 360px;
        max-width: 100vh;
        display: flex;
        flex-flow: column;
        place-content: end;
        background-color: #ebebeb;
    }

    div {
        padding: 16px 16px 32px;
        min-height: 540px;
        max-height: 600px;
        gap: 16px;
        display: grid;
        place-items: center;
        grid-template-rows: min-content min-content auto min-content;
    }

</style>
