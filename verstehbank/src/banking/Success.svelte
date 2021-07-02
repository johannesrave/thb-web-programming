<!--suppress JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from "$lib/ButtonGroup.svelte";
    import { bankingState } from "$banking/bankingState";
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';

    let toDashboard = () => {
        goto(base + '/')
    };

    let goBack = () => {
        $bankingState = 'selectRecipient';
    }
</script>

<h2>Erfolg</h2>

<form on:submit|preventDefault>
    <div>
        Ihre Überweisung wurde abgeschickt.<br>
        Möchten Sie eine weitere Überweisung tätigen?
    </div>
    <ButtonGroup>
        <button on:click|preventDefault={goBack}>Weitere Überweisung</button>
        <button on:click|preventDefault={toDashboard}>Zurück zur Übersicht</button>
    </ButtonGroup>
</form>

