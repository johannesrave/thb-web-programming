<!--Auth.svelte-->
<!--Diese Komponente setze ich auf allen Seiten ein, für die man eingeloggt sein muss.-->
<!--Wenn sie gemountet wird, prüft sie ob der Nutzer bereits authentifiziert ist.-->
<!--Andernfalls wird man auf die Login-Seite zurückgeschickt.-->

<script lang="ts">
    import { auth } from '$lib/stores.js';
    import { goto } from '$app/navigation';
    import { onMount } from "svelte";

    onMount(() => {
        if (!$auth) {
            console.log("Not authenticated, going back to login.")
            goto('/login');
        }
    })

</script>
