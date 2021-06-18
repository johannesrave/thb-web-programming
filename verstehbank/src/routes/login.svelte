<script lang="ts">
    import { auth, users } from '../lib/stores.js';
    import Title from "../lib/Title.svelte";
    import { goto } from '$app/navigation';

    let name: HTMLInputElement;
    let password: HTMLInputElement;

    // Login per submit
    // setzt den auth-store auf true, wenn im users-store
    // zum benutzernamen das eingegebene passwort hinterlegt ist.
    let submit = () => {
        console.log("username:", name.value)
        console.log("password:", password.value)
        console.log("$users[name.value]:", $users[name.value])

        auth.set($users[name.value] === password.value);
        if ($auth) {
            goto('/');
        }
    }
</script>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Anmeldung</Title>
<form on:submit={submit}>
    <div>
        <label for="name" class="required">Benutzername</label>
        <input bind:this={name} type="text" id="name"
               title="Bitte geben Sie Ihren Benutzernamen ein.">
    </div>
    <div>
        <label for="password" class="required">Passwort</label>
        <input bind:this={password} type="password" id="password"
               title="Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein.">
    </div>
    <button on:click|preventDefault={submit}>Anmelden</button>
    <a href="/">Hauptseite</a>
</form>

{#if false}
    <button on:click|preventDefault={() => users.addUser(name.value, password.value)}>User registrieren</button>
    <button on:click|preventDefault={() => users.store()}>Lokal speichern</button>
    <button on:click|preventDefault={() => users.restore()}>Laden</button>
    <slot/>
{/if}


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