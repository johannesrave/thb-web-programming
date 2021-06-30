<script lang="ts">
    import ButtonGroup from "../ButtonGroup.svelte";
    import { bankingState } from "../../routes/banking/bankingState";
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    let toDashboard = () => {
        goto(base + '/')
    };

    let goBack = () => {
        $bankingState = 'selectRecipient';
    }
</script>

<h2>Kontrolle</h2>

<form>
    <div>
        Ihre Überweisung wurde abgeschickt.<br>
        Möchten Sie eine weitere Überweisung tätigen?
    </div>
    <ButtonGroup>
        <button on:click|preventDefault={goBack}>Weitere Überweisung</button>
        <button on:click|preventDefault={toDashboard}>Zurück zur Übersicht</button>
    </ButtonGroup>
</form>

