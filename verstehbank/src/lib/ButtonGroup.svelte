<script lang="ts">
    export let column: boolean = false;
</script>

<div class:row={!column}>
    <slot/>
</div>

<style>
    div {
        display: grid;
        gap: 16px;
        width: 100%;
    }

    .row {
        grid-template-columns: repeat( auto-fit, minmax(32px, 1fr) );
    }

</style>