<section>
    <slot/>
</section>

<style>
    section {
        min-width: 280px;
        min-height: 420px;
        height: 100%;
        width: 320px;
        max-width: 90vh;
        padding: 32px 0;
        gap:16px;
        display: grid;
        place-items: center;
        grid-template-rows: min-content min-content 320px min-content;
    }

</style>
