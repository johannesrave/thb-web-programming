<script lang="ts">
    import { userDB } from '$login/users';
    import { loggedIn, login } from '$login/auth';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import Input from '$lib/Input.svelte';
    import { goto, rootRelative } from '$util/navigation';
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import { browser } from '$app/env';
    import Button from '$lib/Button.svelte';
    import FormLayout from '$lib/FormLayout.svelte';

    let mounted = false;


    onMount(() => {
        mounted = true;
        $pageTitle = 'Anmeldung';
    })

    let username: String;
    let password: String;


    let attemptLogin = () => {

        if($userDB[username]) {
            const userToLogin = $userDB[username];
            console.log(userToLogin);
            console.log(`Trying to log in ${userToLogin.username} using ${password}`)
            const passwordInDB = $userDB[username]['password']

            if (passwordInDB === password) {
                console.log(`Logging in ${userToLogin.username}`)
                login($userDB[username]);
                password = '';
            }
        }
    }

    $: if($loggedIn && browser) {
        console.log(`logged in: ${$loggedIn} going back to dashboard`)
        goto(rootRelative('/'));
    }

</script>

<FormLayout>
    <h2 slot="subheader">Anmeldung</h2>
    <form slot="input" on:submit|preventDefault={attemptLogin}>
        <Input bind:value={username} id="newUser" label="Benutzername"/>
        <Input bind:value={password} id="password" label="Passwort" type="password"/>
<!--        <Input id="newUser" bind:value={username}>Benutzername</Input>-->
<!--        <Input id="password" bind:value={password} type="password">Passwort</Input>-->
    </form>
    <ButtonGroup slot="button-group">
        <Button label="Anmelden" on:click={attemptLogin}/>
    </ButtonGroup>
</FormLayout>