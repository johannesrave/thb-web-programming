<script lang="ts">
    /**
     * Die __layout-Komponente ist der wrapper für alle pages aus dem /routes-Ordner.
     Die pages "login", "index" und "banking" werden im Client an der Stelle von <slot>
     eingefügt. Ich benutze diese Komponente allerdings nur, um das Hintergrundbild
     zu setzen und das allgemeine Layout zu zentrieren. Außerdem wird hier das "globale"
     css importiert, während die meisten anderen Styles innerhalb
     der Komponenten geschrieben sind.
     Die pages enthalten jeweils noch eine <Layout>-Komponente, in der das detailliertere
     Layout stattfindet.

     * @author Johannes Rave
     * @lastUpdated 12.7.2021
     */

    import '../app.css';
    import { onMount } from 'svelte';
    import { initialize } from '$util/persistence'
    import { goto, rootRelative } from '$util/navigation';
    import { loggedIn } from '$login/auth';
    import { page } from '$app/stores';
    import background from '$lib/assets/pexels-douglas-kugler-4017228.jpg';

    let finishedMounting: boolean = false;

/*  onMount läuft, sobald die Komponente auf dem Client fertig geladen wurde.
    Hier wird zentral der persistence-Script initialisiert, der die Fake-Datenbank
    mit dem localStorage abgleicht.*/
    onMount(() => {
        initialize();
        finishedMounting = true;
    })

    /* '$:' leitet in svelte eine reaktive Anweisung ein. Das heißt hier, sobald der
            Ausdruck wahr wird, werden die Aktionen darunter ausgeführt.
            Hier wird der User immer auf die login-page geschickt, sobald niemand
            mehr eingeloggt ist und nicht ohnehin schon die login-page geladen ist.
     */
    $: if (finishedMounting && !$loggedIn && $page.path !== '/login') {
        goto(rootRelative('/login'));
        console.log('Not authenticated, going back to login.');
    }
</script>

<main>
    <slot/>
    <img src="{background}" alt="Ein Bild vom vom blauen Himmel mit Wolken">
</main>

<style>
    main {
        display: grid;
        height: 100vh;
        width: 100vw;
        justify-items: center;
    }

    img {
        object-fit: cover;
        position: fixed;
        display: block;
        width: 100vw;
        height: 100vh;
        z-index: -5;
    }
</style>
