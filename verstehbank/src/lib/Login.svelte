<script lang="ts">
    import Title from "./Title.svelte";
    import { loggedIn, users } from '$lib/stores.js';

    let name: HTMLInputElement;
    let password: HTMLInputElement;

    let attemptLogin = () => {
        console.log(
            "username:", name.value,
            "password:", password.value,
            "user exists:", $users[name.value] !== null,
            "password is correct:", $users[name.value].toString() === password.value.toString()
        )

        const isPasswordCorrect = $users[name.value].toString() === password.value.toString();
        loggedIn.set(isPasswordCorrect);
    }

</script>

<Title title={"Anmeldung"}/>
<form on:submit={attemptLogin}>
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
    <button on:click|preventDefault={attemptLogin}>Anmelden</button>
    <button on:click|preventDefault={() => loggedIn.set(false)}>Abmelden</button>

</form>