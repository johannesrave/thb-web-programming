<script lang="ts">
    import { userDB } from '$login/userDB';
    import { loggedIn, user } from '$login/auth';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Input from '$lib/Input.svelte';
    import { goto, rootRelative } from "../util/navigation";
    import { onMount } from "svelte";
    import { pageTitle } from "../util/pageTitle";

    onMount(() => {
        $pageTitle = 'Anmeldung';
    })

    let username: String;
    let password: String;

    let attemptLogin = () => {
        const passwordInDB = $userDB[username]["password"]

        if (passwordInDB === password) {
            password = null;
            user.login(username);
        }
    }

    $: if($loggedIn){
        goto(rootRelative('/'));
    }

</script>

<form on:submit|preventDefault={attemptLogin}>
    <Input id="newUser" bind:value={username}>Benutzername</Input>
    <Input id="password" type="password" bind:value={password}>Passwort</Input>

    <ButtonGroup>
        <button on:click|preventDefault={attemptLogin}>Anmelden</button>
    </ButtonGroup>
</form>
