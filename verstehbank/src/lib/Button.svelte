<script lang="ts">
    export let label: string;
    export let muted: boolean = false;
</script>

<button type="button" on:click|preventDefault class:muted={muted}>
    {label}
</button>

<style>
    button {
        width: 100%;

        font-size: var(--font-medium);
        height: 4rem;

        color: white;
        background-color: var(--primary-color);
        border: none;
        border-radius: var(--radius-small);
    }

    .muted {
        background-color: var(--muted-color);
    }

</style>