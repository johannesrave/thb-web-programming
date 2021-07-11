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
    import Layout from '$lib/Layout.svelte';

    onMount(() => {
        $pageTitle = 'Anmeldung';
    })

    let username: string;
    let password: string;

    // TODO: username custom validity etc
    // TODO: also, validity for other form fields on other pages
    // TODO: styling buttons with shadows and icons
    // TODO: nice to have: Tansaction history-page
    // TODO: move amount formatting to appropriate package

    let attemptLogin = () => {
        if ($userDB[username]) {
            const userToLogin = $userDB[username];
            console.log(userToLogin);
            console.log(`Trying to log in ${userToLogin.username} using ${password}`)
            const passwordInDB = $userDB[username].password

            if (passwordInDB === password) {
                console.log(`Logging in ${userToLogin.username}`)
                login($userDB[username]);
                password = '';
            }
        }
    }

    $: if ($loggedIn && browser) {
        console.log(`logged in: ${$loggedIn} going back to dashboard`)
        goto(rootRelative('/'));
    }

</script>

<Layout>
    <h1>Online-Banking</h1>
    <h2>Anmeldung</h2>
    <form on:submit|preventDefault={attemptLogin}>
        <Input bind:value={username} id="newUser" label="Benutzername"/>
        <Input bind:value={password} id="password" label="Passwort" type="password"/>
    </form>
    <ButtonGroup>
        <Button label="Anmelden" on:click={attemptLogin} loc="r" icon="log-in-outline"/>
    </ButtonGroup>
</Layout>