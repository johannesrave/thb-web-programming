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
        place-self: center;
        height: 100%;
        width: 360px;
        max-width: 100vh;
        display: grid;
        grid-template-rows: 1fr min-content;
        /*background-color: #ebebeb;*/
        background: radial-gradient(circle at bottom, rgb(203, 212, 219) 0%, rgb(245, 252, 255) 100%);
    }

    div {
        padding: 16px 16px 32px;
        height: 540px;
        min-height: 480px;
        gap: 16px;
        display: grid;
        place-items: center;
        grid-template-rows: min-content min-content auto min-content;
        max-width: 360px;
        margin: auto;
    }


    @media (min-width: 600px) {
        section {
            height: 85vh;
            width: 60%;
        }
    }

</style>
