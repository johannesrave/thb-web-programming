<script lang="ts">
    import { userDB } from '$login/userDB';
    import { user } from '$login/auth';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Input from '$lib/Input.svelte';

    let username: String;
    let password: String;

    let attemptLogin = () => {
        const passwordInDB = $userDB[username]["password"];

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

<form on:submit|preventDefault={attemptLogin}>
    <Input id="newUser" bind:value={username}>Benutzername</Input>
    <Input id="password" type="password" bind:value={password}>Passwort</Input>

    <ButtonGroup>
        <button on:click|preventDefault={attemptLogin}>Anmelden</button>
    </ButtonGroup>
</form>
