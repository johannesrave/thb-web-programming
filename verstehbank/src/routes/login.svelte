<script lang="ts">
    import { authenticated } from './stores.js';
    import Title from "../lib/Title.svelte";
    import { goto } from '$app/navigation';

    let name: HTMLInputElement;
    let password: HTMLInputElement;

    let submit = () => {
        // goto('/');

        if (name.value === 'beateweber') {
            authenticated.set(true);
            console.log("Nutzername", name.value)
            console.log("authenticated", $authenticated)
            goto('/');
        }
        else{
            name.setCustomValidity(
                'Bitte geben Sie Ihren Benutzernamen für die Online Banking Webseite der Verstehbank ein.'
            );
            name.reportValidity();
            alert("NICHT eingeloggt!")
        }
    }
</script>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Onlinebanking für Menschen.</Title>
<form on:submit={submit}>
    <div>
        <label for="name" class="required">Benutzername:</label>
        <input bind:this={name} type="text" placeholder="beateweber" id="name"
               title="Bitte geben Sie Ihren Benutzernamen ein.">
    </div>
    <div>
        <label for="password" class="required">Passwort:</label>
        <input bind:this={password} type="password" placeholder="********" id="password"
               title="Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein.">
    </div>
    <button type="submit">Anmelden</button>
    <a href="/">Hauptseite</a>
</form>
{#if false}<slot />{/if}


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