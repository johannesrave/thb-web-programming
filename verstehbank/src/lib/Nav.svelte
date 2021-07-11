<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { logout } from '$login/auth'
    import { emptyTransaction, transactionForm } from '$banking/bankingForm';
    import { bankingState } from '$banking/bankingState';
    import Logo from '$lib/Logo.svelte';
    import Icon from './Icon.svelte';

    // TODO add icons to  buttons (where from?)

    const logUserOut = () => {
        logout();
        transactionForm.set(emptyTransaction);
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    }
</script>


<nav>
    <a href={rootRelative('/')}>
        <div class="logo-wrapper">
            <Logo fill="white" small="true"/>
        </div>
        Übersicht
    </a>
    <button on:click|preventDefault={logUserOut}>
        Abmelden
        <div class="icon-wrapper">
            <Icon icon="log-out-outline"/>
        </div>
    </button>
</nav>

<style>
    nav {
        justify-self: end;
        align-self: end;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        background: radial-gradient(circle at bottom, rgb(54, 48, 48) 0%, rgb(53, 61, 66) 100%);
        height: 4rem;
        fill: white;
    }

    a, button {
        cursor: pointer;
        background-color: unset;
        border: none;
        font: inherit;
        font-family: Rubik, sans-serif;
        font-weight: normal;
    }

    a, button {
        width: 100%;
        height: 100%;
        font-size: 1.4em;
        text-decoration: none;
        color: var(--pure-white);
        display: flex;
        gap: 12px;
        place-items: center;
        place-content: center;
        /*white-space: nowrap;*/
    }

    a:hover, button:hover {
        text-decoration: underline;
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }

    .logo-wrapper {
        display: inline-block;
        width: 1.6rem;
    }

    .icon-wrapper {
        width: 2rem;
        display: flex;
        place-items: center;
        place-content: center;
    }
</style>
