<script lang="ts">
    import { bankingStates, bankingState } from '$banking/bankingState'
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import Nav from '$lib/Nav.svelte';
    import Layout from '../lib/Layout.svelte';
    import { slide, fly } from 'svelte/transition';


    onMount(() => {
        $pageTitle = 'Überweisung';
        $bankingState = 'selectRecipient';
    })

    $:console.log('bankingState changed to:' + $bankingState);
</script>
<Layout>
    <h1>Überweisung</h1>
    <svelte:component out:fly="{{delay: 300, duration: 300}}" this={bankingStates[$bankingState]}/>
<!--    <Nav/>-->
</Layout>
