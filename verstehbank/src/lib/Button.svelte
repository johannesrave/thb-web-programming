<script lang="ts">
    export let label: string;
    export let form: string = '';

    export let muted: boolean = false;
    export let look: 'primary' | 'secondary' | 'cancel' = 'primary';
</script>


<button type="button" on:click|preventDefault class:muted={muted} {form}
class="shadow-medium">
    {label}
</button>

<style>
    button {
        position: relative;
        overflow: hidden;
        transition: background 400ms;
        cursor: pointer;

        width: 100%;

        font-size: 28px;
        height: 4rem;

        color: white;
        background-color: var(--primary-color);
        border: none;
        border-radius: var(--radius-small);

    }

    .muted {
        background-color: var(--muted-color);
    }

    button:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }

</style>