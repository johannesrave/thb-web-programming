<script lang="ts">
    import { userDB } from '$login/users';
    import { loggedIn, user } from '$login/auth';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Input from '$lib/Input.svelte';
    import { goto, rootRelative } from '$util/navigation';
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import { browser } from '$app/env';
    import Button from '$lib/Button.svelte';
    import FormLayout from '$lib/FormLayout.svelte';

    onMount(() => {
        $pageTitle = 'Anmeldung';
    })

    let username: String;
    let password: String;

    let attemptLogin = () => {
        console.log('Trying to log in using ' + password)
        const passwordInDB = $userDB[username]['password']

        if (passwordInDB === password) {
            password = null;
            user.login(username);
        }
    }

    $: if ($loggedIn && browser) {
        goto(rootRelative('/'));
    }

</script>

<FormLayout>
    <h2 slot="subheader">Anmeldung</h2>
    <form slot="input" on:submit|preventDefault={attemptLogin}>
        <Input id="newUser" bind:value={username}>Benutzername</Input>
        <Input id="password" bind:value={password} type="password">Passwort</Input>
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Anmelden" on:click={attemptLogin}/>
    </ButtonGroup>
</FormLayout>