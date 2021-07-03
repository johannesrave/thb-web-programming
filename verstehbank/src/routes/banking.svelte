<script lang="ts">
    // import Title from '$lib/Title.svelte';
    import { bankingStates, bankingState } from "$banking/bankingState"
    import { onMount } from "svelte";
    import { pageTitle } from '$util/pageTitle';

    onMount(() => {
        $pageTitle = 'Überweisung';
    })

    $:console.log("bankingState changed to:" + $bankingState);
</script>

<svelte:component this={bankingStates[$bankingState]}/>