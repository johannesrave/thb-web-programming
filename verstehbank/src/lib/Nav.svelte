<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { logout } from '$login/auth'
    import { emptyTransaction, transactionForm } from '$banking/bankingForm';
    import { bankingState } from '$banking/bankingState';
    import Logo from '$lib/Logo.svelte';

    // TODO add icons to  buttons (where from?)

    const logUserOut = () => {
        logout();
        transactionForm.set(emptyTransaction);
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    }
</script>


<nav>
    <div class="wrapper">
        <a href="/"><div class="logo-wrapper"><Logo fill="white" small="true"/></div> Übersicht</a>
        <button on:click|preventDefault={logUserOut}>Abmelden</button>
    </div>
</nav>

<style>
    nav {
        justify-self: end;
        align-self: end;
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        place-items: center;
        background: radial-gradient(circle at bottom, rgb(54, 48, 48) 0%, rgb(53, 61, 66) 100%);
    }

    .wrapper {
        width: 80%;
        /*height: 100%;*/
        height: 4rem;
        display: grid;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
        align-content: center;
        gap: 32px;
        font-size: var(--font-small);
    }

    a, button {
        cursor: pointer;
        background-color: unset;
        border: none;
        font: inherit;
        font-family: Rubik, sans-serif;
        font-weight: normal;
        font-size: 1.2em;
        text-decoration: none;
        color: var(--pure-white);
    }
    a {
        display: flex;
        gap: 12px;
        place-items: center;
        place-content: center;
    }

    a:hover, button:hover {
        text-decoration: underline;
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }

    .logo-wrapper{
        width: 1.6rem;
    }
</style>
