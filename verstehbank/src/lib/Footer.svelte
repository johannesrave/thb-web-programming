<script lang="ts">
    import { goto } from "$app/navigation";
    import { user, userName } from '$lib/authStore'
    // import { userDB } from '$lib/authStore'
</script>


<footer>
    {$userName}
    <button on:click|preventDefault={() =>{
        user.logout();
        goto('/');
    }}>Abmelden
    </button>
    <a href="/">Zurück zur Übersicht</a>
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
