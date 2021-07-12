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
        width: 100%;
        max-width: 100vh;
        display: grid;
        grid-template-rows: 1fr min-content;
        background: radial-gradient(circle at bottom, rgb(203, 212, 219) 0%, rgb(245, 252, 255) 100%);
    }

    div {
        /*width: 100%;*/
        padding: 32px 16px 64px;
        gap: 32px;
        display: grid;
        grid-template-rows: min-content 3rem 1fr min-content;
        grid-template-columns: 330px;
        place-items: center;
        place-content: center;
        margin: 0 auto;
    }

    @media screen and (min-width: 440px) and (min-height: 720px) {
        section {
            width: 380px;
        }
    }

    @media screen and (min-width: 600px) and (min-height: 720px) {
        section {
            height: 85vh;
            width: 60vw;
        }
    }

    @media (min-width: 960px) and (min-height: 720px) {
        section {
            height: 85vh;
            width: 660px;
        }
    }

</style>
