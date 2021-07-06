<!--Idee für dynamische Input-Komponente von-->
<!--https://svelte.dev/repl/31ee5896ee5c4364bf6d73538c895bd5?version=3.14.1-->

<!--suppress XmlInvalidId -->
<script lang="ts" context="module">
    let idCounter: number = 0
</script>

<script lang="ts">
    export let label: string = '';
    export let id: string = 'input_' + idCounter++;
    export let type: string = 'text';
    export let value: string = '';
    export let placeholder: string = '';
    export let title: string = 'Bitte füllen Sie dieses Feld aus.';

    export let rightJust: boolean = false;

    const handleInput = (event) => {
        value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    };

</script>

<div>
    <label for={id}>{label}</label>
    <input {id} {type} {title} {value} {placeholder} class:right-just={rightJust}
           on:input={handleInput} on:change={handleInput}>
</div>


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

    .right-just {
        text-align: right;
    }
</style>