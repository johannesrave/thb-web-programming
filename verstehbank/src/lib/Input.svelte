<!--Idee für dynamische Input-Komponente von-->
<!--https://svelte.dev/repl/31ee5896ee5c4364bf6d73538c895bd5?version=3.14.1-->

<!--suppress XmlInvalidId -->
<script context="module" lang="ts">
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
    export let error: string = '';
    export let title: string = 'Bitte füllen Sie dieses Feld aus.';
    export let currency: boolean = false;

    export let rightJust: boolean = false;
    let finishedMounting: boolean = false;

    onMount(() => {
        finishedMounting = true;
    })

    const handleInput = (event: any) => {
        value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // onChange(value);
    };

    $:if (finishedMounting && error) {
        console.log(error)
        input.setCustomValidity(error);
        input.reportValidity();
    }

</script>

<div class="shadow-small">
    <label for={id}>{label}</label>
    {#if !currency}
        <input bind:this={input} {id} {type} {title} {value} {placeholder} {error} class:right-just={rightJust}
               on:input={handleInput} on:change={handleInput} on:blur>
    {:else }
        <span class="input-wrapper">
        <input bind:this={input} {id} {type} {title} {value} {placeholder} {error} class:right-just={rightJust}
               on:input={handleInput} on:change={handleInput} on:blur>
            <span class="currency">€</span>
        </span>
    {/if  }
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

    .input-wrapper {
        display: grid;
        grid-template-columns: 1fr min-content;
        align-items: center;
    }

    .currency {
        font-weight: inherit;
        font-size: 1.6em;
    }

    .right-just {
        text-align: right;
    }
</style>