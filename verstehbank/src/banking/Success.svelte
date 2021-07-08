<!--suppress JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { bankingState, back } from '$banking/bankingState';
    import { goto, rootRelative } from '$util/navigation';
    import Button from '../lib/Button.svelte';

    let toDashboard = () => {
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    };

</script>

<h2>Erfolg</h2>
<form on:submit|preventDefault>
    <div>
        Ihre Überweisung wurde abgeschickt.<br>
        Möchten Sie eine weitere Überweisung tätigen?
    </div>
</form>
<ButtonGroup slot="button-group" column="true">
    <Button label="Weitere Überweisung" on:click={back}/>
    <Button label="Zurück zur Übersicht" on:click={toDashboard}/>
</ButtonGroup>
