<!--suppress JSUndeclaredVariable -->
<script lang="ts">
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { bankingState, back } from '$banking/bankingState';
    import { goto, rootRelative } from '$util/navigation';
    import Button from '../lib/Button.svelte';
    import Icon from '../lib/Icon.svelte';

    let toDashboard = () => {
        $bankingState = 'selectRecipient';
        goto(rootRelative('/'));
    };

</script>

<h2>Erfolg</h2>
<form on:submit|preventDefault>
    <div>
        <Icon icon="checkmark-circle-outline"/>
    </div>
</form>
<ButtonGroup slot="button-group" column="true">
    <Button label="Neue Überweisung" on:click={back} icon="repeat-outline"/>
    <Button label="Zur Übersicht" on:click={toDashboard} icon="corner-right-up-outline" look="muted"/>
</ButtonGroup>


<style>
    div {
        fill: #7fcb6b;
        width: 200px;
        height: auto;
    }
</style>