<script context="module">
    export async function load({ page, fetch, session, context }) {
        const url = `https://swapi.dev/api/people/1/`;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    character: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }</script>


<script lang="ts">
    import Title from '$lib/Title.svelte';
    import Input from '$lib/Input.svelte';
    import { userDB } from '$login/userDB';
    import { user } from '$login/auth';
    import ButtonGroup from '$lib/ButtonGroup.svelte';

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
    <Input id="password" type="password" bind:value={password}>Passwort</Input>

    <ButtonGroup>
        <button on:click|preventDefault={attemptLogin}>Anmelden</button>
    </ButtonGroup>
</form>

<style>
    form {
        /*width: 100%;*/
    }
</style>