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
        background: radial-gradient(circle at bottom, rgb(203, 212, 219) 0%, rgb(245, 252, 255) 100%);
    }

    div {
        padding: 16px 16px 32px;
        height: 540px;
        min-height: 480px;
        gap: 16px;
        display: grid;
        place-items: center;
        grid-template-rows: min-content 3rem auto min-content;
        max-width: 360px;
        margin: auto;
    }


    @media screen and (min-width: 600px) and (min-height: 720px){
        section {
            height: 85vh;
            width: 60%;
        }
    }

    @media (min-width: 960px) and (min-height: 720px) {
        section {
            height: 85vh;
            width: 660px;
        }
    }

</style>
