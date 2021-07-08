<script lang="ts">
    import { bankingStates, bankingState } from '$banking/bankingState'
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import Nav from '$lib/Nav.svelte';

    onMount(() => {
        $pageTitle = 'Überweisung';
        $bankingState = 'selectRecipient';
    })

    $:console.log('bankingState changed to:' + $bankingState);
</script>

<h1>Überweisung</h1>
<svelte:component this={bankingStates[$bankingState]}/>
<Nav/>