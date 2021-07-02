<script lang="ts">
    // import Title from '$lib/Title.svelte';
    import { bankingStates, bankingState } from "$banking/bankingComponents"
    import { onMount } from "svelte";
    import { pageTitle } from '$util/pageTitle';

    onMount(() => {
        $pageTitle = 'Überweisung';
    })
</script>

<!--<Title title={"Überweisung"}/>-->

<svelte:component this={bankingStates[$bankingState]}/>