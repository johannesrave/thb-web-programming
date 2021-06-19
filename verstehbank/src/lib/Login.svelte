<script lang="ts">
    import Title from "./Title.svelte";
    import { loggedIn, users } from '$lib/stores.js';

    let user: HTMLInputElement;
    let password: HTMLInputElement;

    let attemptLogin = () => {

        const passwordInDB = $users[user]["password"]

        console.log(
            "username:", user,
            "password:", password,
            "user exists:", $users[user] !== null,
            "password is correct:", passwordInDB === password
        )

        if (passwordInDB === password){
            loggedIn.set(user);
        }
    }

</script>

<Title title={"Anmeldung"}/>
<form on:submit={attemptLogin}>
    <div>
        <label for="name" class="required">Benutzername</label>
        <input bind:value={user} type="text" id="name"
               title="Bitte geben Sie Ihren Benutzernamen ein.">
    </div>
    <div>
        <label for="password" class="required">Passwort</label>
        <input bind:value={password} type="password" id="password"
               title="Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein.">
    </div>
    <button on:click|preventDefault={attemptLogin}>Anmelden</button>
    <button on:click|preventDefault={() => loggedIn.set(false)}>Abmelden</button>

</form>