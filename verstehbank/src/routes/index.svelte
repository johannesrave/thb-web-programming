<script context="module" lang="ts">
    import {authenticated} from './stores';
    import {browser} from '$app/env';

    let localAuthenticated: boolean;
    authenticated.subscribe(auth => localAuthenticated = auth);

    export async function load() {
        console.log("browser", browser)

        if (localAuthenticated) {
            console.log("Authenticated - NOT redirecting.")
            return {
                status: 200
            };
        }

        console.log("Not authenticated - redirecting.")
        return {
            status: 302,
            redirect: '/login'
        };


    }
</script>


<script lang="ts">
    import Title from "../lib/Title.svelte";
    import RoundButton from "../lib/RoundButton.svelte";
</script>

<!--<Auth/>-->

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Übersicht</Title>

<RoundButton link={'/banking'} name={'Geld senden'}/>
<RoundButton link={'/contacts'} name={'Kontakte pflegen'}/>

{#if false}
    <slot/>
{/if}