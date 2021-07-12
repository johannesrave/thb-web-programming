<script lang="ts">
    import Icon from '$lib/Icon.svelte';
    import type { Icons } from '$lib/Icon.svelte';

    export let label: string;
    export let icon: Icons =  "arrow-right";
    export let loc: 'r' | 'l' | 't' | 'b' = 'r';

    export let form: string = '';

    export let muted: boolean = false;
    export let look: 'primary' | 'secondary' | 'cancel' = 'primary';
</script>


<button class="shadow-medium {look}" {form} on:click|preventDefault
        type="button">
    <div class="icon {loc}">
        <Icon {icon}/>
    </div>
    <div class="label">
        {label}
    </div>
</button>


<style>
    button {
        position: relative;
        overflow: hidden;
        transition: background 400ms;
        cursor: pointer;

        width: 100%;
        font-size: 24px;
        height: 4rem;

        color: white;
        background-color: var(--primary-color);
        border: none;
        border-radius: var(--radius-small);

        display: grid;
        grid-template:
                ". t ." 1fr
                "l c r" auto
                ". b ." 1fr / 1fr auto 1fr;
        gap: 8px;
        place-items: center;
    }

    .label {
        grid-area: c;
    }

    .icon {
        height: 2rem;
        width: 2rem;
        fill: white;
    }

    .r {
        grid-area: r;
        justify-self: left;
    }

    .l {
        grid-area: l;
        justify-self: right;
    }

    .t {
        grid-area: t;
    }

    .b {
        grid-area: b;
    }

    .primary {
        background-color: var(--primary-color);
    }

    .muted {
        background-color: var(--muted-color);
    }

    .cancel {
        background-color: var(--cancel-color);
    }

    button:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }

</style>