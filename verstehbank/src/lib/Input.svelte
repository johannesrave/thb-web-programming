<!--Idee für dynamische Input-Komponente von-->
<!--https://svelte.dev/repl/31ee5896ee5c4364bf6d73538c895bd5?version=3.14.1-->

<!--suppress XmlInvalidId -->
<script lang="ts" context="module">
    let idCounter: number = 0
</script>

<script lang="ts">
    import { onMount } from 'svelte';

    let input: HTMLInputElement;
    export let label: string = '';
    export let id: string = 'input_' + idCounter++;
    export let type: string = 'text';
    export let value: string = '';
    export let placeholder: string = '';
    export let error;
    export let title: string = 'Bitte füllen Sie dieses Feld aus.';

    export let rightJust: boolean = false;

    let finishedMounting: boolean = false;
    onMount(() => {
        finishedMounting = true;
    })

    const handleInput = (event) => {
        value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // onChange(value);
    };

    $:if(finishedMounting && error){
        console.log(error)
        input.setCustomValidity(error);
        input.reportValidity();
    }

</script>

<div>
    <label for={id}>{label}</label>
    <input bind:this={input} {id} {type} {title} {value} {placeholder} {error} class:right-just={rightJust}
           on:input={handleInput} on:change={handleInput} on:blur>
</div>


<style>
    div {
        display: grid;
        background-color: white;
        padding: 8px;
        border: solid var(--primary-color);
        border-width: 0 1px 1px;
        border-radius: var(--radius-small);
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