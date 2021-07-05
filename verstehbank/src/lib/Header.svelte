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
    <a href="/">Übersicht</a>
    <p>{$userName}</p>
    {#if $loggedIn}
        <button on:click|preventDefault={logout}>
            Abmelden
        </button>
    {/if}
</header>

<style>
    header {
        justify-self: flex-start;
        align-self: flex-start;

        color: white;
        /*border: white 1px solid;*/
        display: flex;
        /*flex: 1;*/
        width: 100%;
        height: 4em;
        justify-content: space-around;
        align-items: center;
        /*gap: 16px;*/
        padding: 8px;

        background-color: dimgray;
    }

    p {
        color: white;
    }


    button {
        background-color: unset;
    }
</style>
