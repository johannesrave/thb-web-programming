<script lang="ts">
    export let selected: boolean = false;
</script>

<div class="option" on:click class:selected>
    <div class="wrapper">
        <h3>
            <slot name="itemName"/>
        </h3>
        <p>
            <slot name="line1"/>
        </p>
        <p>
            <slot name="line2"/>
        </p>
    </div>
</div>


<style>
    .option {
        display: flex;
        flex-flow: column;
        justify-content: center;
        border: 1px solid var(--muted-color);
        min-height: 4rem;

    }

    .wrapper {
        margin: 8px;
        display: flex;
        flex-flow: column;
        gap: 4px;
    }

    .selected, .selected > * {
        color: white;
        background-color: var(--primary-color);
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.5rem;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1rem;
    }
</style>