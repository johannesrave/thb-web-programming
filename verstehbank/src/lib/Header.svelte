<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { user, userName, loggedIn } from '$login/auth'
    import { emptyTransaction, transactionForm } from '$banking/bankingForm';
    import { bankingState } from '$banking/bankingState';

    // TODO make elements consistent by styling link and button the same way (or turn both into buttons)
    // TODO add icons to  buttons (where from?)

    const logout = () => {
        user.logout();
        transactionForm.set(emptyTransaction);
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    }
</script>


<header>
    <nav>
    <a href="/">Übersicht</a>
    {#if $loggedIn}
        <button on:click|preventDefault={logout}>Abmelden</button>
    {/if}
    </nav>
</header>

<style>
    header {
        justify-self: flex-start;
        align-self: flex-start;
        width: 100%;
        height: 4rem;

        display: grid;
        grid-auto-flow: column;

        place-items: center;

        font-size: var(--font-small);

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
    }

    p {
        color: white;
    }


    a, button {
        background-color: unset;
        border: none;
        font: inherit;
        font-family: Rubik,sans-serif;
        font-weight: normal;
        font-size: 1.2em;
        color: var(--pure-white)
    }
</style>
