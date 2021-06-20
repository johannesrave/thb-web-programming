<script lang="ts">
    import { user } from '$lib/stores'
    import Dashboard from "../lib/Dashboard.svelte";
    import Login from "$lib/Login.svelte";
</script>

{#if $user}
    <Dashboard/>
{:else}
    <Login/>
{/if}
