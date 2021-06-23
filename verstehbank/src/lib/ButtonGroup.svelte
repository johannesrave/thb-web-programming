<div>
    <slot/>
</div>

<style>
    div {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(32px, 1fr) );
        gap: 16px;
        /*justify-items: center;*/
        width: 100%;
    }
</style>