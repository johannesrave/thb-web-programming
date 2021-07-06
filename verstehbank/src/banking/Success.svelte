<!--suppress JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { bankingState, back } from '$banking/bankingState';
    import { goto, rootRelative } from '$util/navigation';
    import FormLayout from '../lib/FormLayout.svelte';
    import Button from '../lib/Button.svelte';

    let toDashboard = () => {
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    };

</script>

<FormLayout>
    <h2 slot="subheader">Erfolg</h2>
    <form slot="input" on:submit|preventDefault>
        <div>
            Ihre Überweisung wurde abgeschickt.<br>
            Möchten Sie eine weitere Überweisung tätigen?
        </div>
    </form>
    <ButtonGroup slot="button-group" column="true">
        <Button label="Weitere Überweisung" on:click={back}/>
        <Button label="Zurück zur Übersicht" on:click={toDashboard}/>
<!--        <button type="button" on:click|preventDefault={back}>Weitere Überweisung</button>-->
<!--        <button on:click|preventDefault={toDashboard}>Zurück zur Übersicht</button>-->
    </ButtonGroup>
</FormLayout>