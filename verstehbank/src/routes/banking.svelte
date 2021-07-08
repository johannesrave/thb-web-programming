<script lang="ts">
    import { bankingStates, bankingState } from '$banking/bankingState'
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';

    onMount(() => {
        $pageTitle = 'Überweisung';
        $bankingState = 'selectRecipient';
    })

    $:console.log('bankingState changed to:' + $bankingState);
</script>

<svelte:component this={bankingStates[$bankingState]}/>