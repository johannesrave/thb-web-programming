<script lang="ts">
    export let type: String = "text";
    export let title: String = "Bitte füllen Sie dieses Feld aus.";
    export let id: String;
    export let value: String;

    $: id2 = id;
    $: id3 = id;

</script>

{#if type === "text"}
<div>
    <label for={id}>
        <slot/>
    </label>
    <input type="text" id={id} {title} bind:value={value}>
</div>
{:else if type === "number"}
<div>
    <label for={id2}>
        <slot/>
    </label>
    <input type="number" id={id2} {title} bind:value={value}>
</div>
{:else if type === "password"}
<div>
    <label for={id3}>
        <slot/>
    </label>
    <input type="password" id={id3} {title} bind:value={value}>
</div>
{/if}

<style>
    div {
        display: grid;
        background-color: white;
        padding: 8px;
        border: solid var(--primary-color);
        border-width: 0 1px 1px;
        border-radius: 4px;
    }

    * {
        color: var(--text-color);
        width: 100%;
    }

    input, input:focus {
        font-size: 1.6rem;
        background: transparent;
        border: none;
        outline-width: 0;
    }
</style>