<script lang="ts">
    /**
     * Die Seite banking beinhaltet den Überweisungs-Klickpfad, realisiert durch
     * eine State-Machine in einem svelte-Store (bankingStates).
     * Beim betreten der Seite wird der bankingState

     * @author Johannes Rave
     * @lastUpdated 12.7.2021
     */
    import { bankingStates, bankingState } from '$banking/bankingState'
    import { onMount } from 'svelte';
    import Layout from '$lib/Layout.svelte';

    onMount(() => {
        $bankingState = 'selectRecipient';
    })

    $:console.log('bankingState changed to:' + $bankingState);
</script>
<Layout>
    <h1>Überweisung</h1>
    <svelte:component this={bankingStates[$bankingState]}/>
</Layout>
