<script lang="ts">
    import { authenticated } from './stores.js';
    import Title from "../lib/Title.svelte";
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';


    let name: HTMLInputElement;
    let password: HTMLInputElement;

    let localAuthenticated : boolean;

    authenticated.subscribe(auth => localAuthenticated = auth);

    let changedName = () => {
    }

    onMount(() => {
        if (localAuthenticated) {

        }
    })

    let submit = () => {
        if (name.value === 'beateweber') {
            authenticated.update(auth => true);
            alert("Eingeloggt!")

            goto('/banking');

        }
        else{
            name.setCustomValidity(
                'Bitte geben Sie Ihren Benutzernamen für die Online Banking Webseite der Verstehbank ein.'
            );
            name.reportValidity();
            alert("NICHT eingeloggt!")
        }
    }


</script>

<svelte:head>
    <title>Anmeldung</title>
</svelte:head>

<Title>Onlinebanking für Menschen.</Title>
<form on:submit={submit}>
    <div>
        <label for="name" class="required">Benutzername:</label>
        <input bind:this={name} on:input={changedName} type="text" placeholder="beateweber" name="name" id="name"
               title="Bitte geben Sie Ihren Benutzernamen ein.">
    </div>
    <div>
        <label for="password" class="required">Passwort:</label>
        <input bind:this={password} type="password" placeholder="********" name="password" id="password"
               title="Bitte geben Sie das Passwort für die Anmeldung beim Online Banking ein.">
    </div>

    <button type="submit">TEST</button>

<!--    <RoundButton link={'/banking'} name={'Anmelden'} on:click={() => console.log("submit clicked")}/>-->
</form>


<style>
    div, form {
        display: flex;
        flex-flow: column;
    }

    form {
        gap: 16px;
        align-items: center;
    }
</style>