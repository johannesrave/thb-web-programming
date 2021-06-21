<!--Auth.svelte-->
<!--Diese Komponente setze ich auf allen Seiten ein, für die man eingeloggt sein muss.-->
<!--Wenn sie gemountet wird, prüft sie ob der Nutzer bereits authentifiziert ist.-->
<!--Andernfalls wird man auf die Login-Seite zurückgeschickt.-->

<script lang="ts">
    import { loggedIn } from '$lib/authStore.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { browser } from '$app/env';

    $: if((!loggedIn) && ($page.path !== '/login') && browser){
        alert("Bitte melden Sie sich an.");
        goto(base + '/login');
        console.log("Not authenticated, going back to login.");
    }

</script>
