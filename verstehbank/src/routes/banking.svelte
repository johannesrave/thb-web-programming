<script lang="ts">
    import Auth from '$login/Auth.svelte';
    import Title from '$lib/Title.svelte';
    import { bankingStates, bankingState } from "$banking/bankingComponents"
</script>

<Auth/>
<Title title={"Überweisung"}/>

<svelte:component this={bankingStates[$bankingState]}/>

<style>
    div, form {
        display: flex;
        flex-flow: column;
    }

    form {
        gap: 16px;
        align-items: center;
    }

</style>