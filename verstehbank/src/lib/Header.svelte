<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { user, loggedIn, logout } from '$login/auth'
    import { emptyTransaction, transactionForm } from '$banking/bankingForm';
    import { bankingState } from '$banking/bankingState';

    // TODO add icons to  buttons (where from?)

    const logUserOut = () => {
        logout();
        transactionForm.set(emptyTransaction);
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    }
</script>


<header>
    <nav>
        <a href="/">Übersicht</a>
        {#if $loggedIn}
            <button on:click|preventDefault={logUserOut}>Abmelden</button>
        {/if}
    </nav>
</header>

<style>
    header {
        width: 100%;
        height: 4rem;

        display: grid;
        grid-auto-flow: column;

        place-items: center;


        color: white;
        background-color: var(--secondary-color);
    }

    nav {
        display: flex;
        justify-content: space-between;
        flex: 1;
        min-width: 280px;
        width: 40vw;
        max-width: 400px;
        font-size: var(--font-small);
    }

    a, button {
        background-color: unset;
        border: none;
        font: inherit;
        font-family: Rubik, sans-serif;
        font-weight: normal;
        font-size: 1.2em;
        color: var(--pure-white)
    }
</style>
