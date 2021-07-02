<script lang="ts">
    import { goto } from "$app/navigation";
    import { user, userName, loggedIn } from '$lib/auth'
    import { emptyTransaction, transactionForm } from "$banking/bankingForm";
    import { bankingState } from "$banking/bankingState";

    const logout = () => {
        user.logout();
        transactionForm.set(emptyTransaction);
        $bankingState = 'selectRecipient';
        goto(base + '/');
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
</style>
