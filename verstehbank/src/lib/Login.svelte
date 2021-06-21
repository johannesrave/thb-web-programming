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
    <button on:click|preventDefault={attemptLogin}>Anmelden</button>
</form>

<style>
    form {
        width: 100%;
    }
</style>