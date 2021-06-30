<script lang="ts">
    import { goto } from "$app/navigation";
    import { user, userName, loggedIn } from '$lib/auth'
    // import { userDB } from '$lib/authStore'

    const logout = () => {
        user.logout();
        goto('/');
    }
</script>


<footer>

    <a href="/">Übersicht</a>
    <p>{$userName}</p>
    {#if $loggedIn}
        <button on:click|preventDefault={logout}>
            Abmelden
        </button>
    {/if}
</footer>

<style>
    footer {
        color: white;
        border: white 1px solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /*gap: 16px;*/
        padding: 8px;

        background-color: dimgray;
    }

    p {
        color: white;
    }
</style>
