<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { logout } from '$login/auth'
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


<nav>
    <div>
        <a href="/">Übersicht</a>
        <button on:click|preventDefault={logUserOut}>Abmelden</button>
    </div>
</nav>

<style>
    nav {
        place-self: end;
        width: 100%;
        height: 4rem;

        display: grid;
        grid-auto-flow: column;

        place-items: center;


        color: white;
        background-color: var(--secondary-color);
    }

    div {
        display: flex;
        place-items: center;
        justify-content: space-around;
        flex: 1;
        font-size: var(--font-small);
    }

    a, button {
        height: 100%;
        cursor: pointer;
        background-color: unset;
        border: none;
        font: inherit;
        font-family: Rubik, sans-serif;
        font-weight: normal;
        font-size: 1.2em;
        text-decoration: underline;
        color: var(--pure-white)
    }

    a:hover, button:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.05);
    }
</style>
