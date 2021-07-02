<!--suppress JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from "$lib/ButtonGroup.svelte";
    import { back } from "$banking/bankingState";
    import { goto, rootRelative } from "$util/navigation";

    let toDashboard = () => {
        goto(rootRelative('/'));
    };

</script>

<h2>Erfolg</h2>

<form on:submit|preventDefault>
    <div>
        Ihre Überweisung wurde abgeschickt.<br>
        Möchten Sie eine weitere Überweisung tätigen?
    </div>
    <ButtonGroup>
        <button type="button" on:click|preventDefault={back}>Weitere Überweisung</button>
        <button on:click|preventDefault={toDashboard}>Zurück zur Übersicht</button>
    </ButtonGroup>
</form>

