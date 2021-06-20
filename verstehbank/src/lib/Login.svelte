<script lang="ts">
    import Title from "./Title.svelte";
    import { user, userDB } from '$lib/stores.js';
    import Input from "$lib/Input.svelte";

    let username: String;
    let password: String;

    let attemptLogin = () => {

        const passwordInDB = $userDB[username]["password"]

        console.log(
            "username:", username,
            "password:", password,
            "user exists:", $userDB[username] !== null,
            "password is correct:", passwordInDB === password
        )

        if (passwordInDB === password) {
            user.login(username);
        }
    }

</script>

<Title title={"Anmeldung"}/>
<form on:submit={attemptLogin}>
    <Input id="newUser" bind:value={username}>Benutzername</Input>
    <Input id="newUser" type="password" bind:value={password}>Passwort</Input>
<!--    <div>-->
<!--        <label for="name" class="required">Benutzername</label>-->
<!--        <input bind:value={username} type="text" id="name"-->
<!--               title="Bitte geben Sie Ihren Benutzernamen ein.">-->
<!--    </div>-->
<!--    <div>-->
<!--        <label for="password" class="required">Passwort</label>-->
<!--        <input bind:value={password} type="password" id="password"-->
<!--               title="Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein.">-->
<!--    </div>-->
    <button on:click|preventDefault={attemptLogin}>Anmelden</button>
<!--    <button on:click|preventDefault={() => $user.logout()}>Abmelden</button>-->

</form>

<style>
    form {
        width: 100%;
    }
</style>