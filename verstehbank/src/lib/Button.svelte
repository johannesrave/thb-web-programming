<script lang="ts">
    export let label: string;
    export let form: string = '';

    export let muted: boolean = false;
    export let look: 'primary' | 'secondary' | 'cancel' = 'primary';
</script>


<button type="button" on:click|preventDefault class:muted={muted} {form}>
    {label}
</button>

<style>
    /*ripple effect für button nachgebaut von*/
    /*https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/*/

    button {
        position: relative;
        overflow: hidden;
        transition: background 400ms;
        cursor: pointer;

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

    span.ripple {
        position: absolute; /* The absolute position we mentioned earlier */
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 600ms linear;
        background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    button:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }

</style>