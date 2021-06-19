<script lang="ts">
    import { loggedIn } from '$lib/stores'
    import Dashboard from "$lib/Dashboard.svelte";
    import Login from "$lib/Login.svelte";
</script>

{#if $loggedIn}
    <Dashboard/>
{:else}
    <Login/>
{/if}
