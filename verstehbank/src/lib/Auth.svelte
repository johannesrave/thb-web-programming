<!--Auth.svelte-->
<!--Diese Komponente setze ich auf allen Seiten ein, für die man eingeloggt sein muss.-->
<!--Wenn sie gemountet wird, prüft sie ob der Nutzer bereits authentifiziert ist.-->
<!--Andernfalls wird man auf die Login-Seite zurückgeschickt.-->

<script lang="ts">
    import { user } from '$lib/stores.js';
    import { goto } from '$app/navigation';
    import { base } from '$app/paths'

    $: if(!$user){
        alert("Bitte melden Sie sich an.")
        console.log("Not authenticated, going back to login.")
        goto(base + '/');
    }

</script>
