<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import FormLayout from '$lib/FormLayout.svelte';
    import Button from '$lib/Button.svelte';
    import { balance } from '$banking/accounts';

    let sign;
    let formattedBalance;

    onMount(() => {
        $pageTitle = 'Übersicht';
    })

    const gotoBanking = () => {
        goto(rootRelative('/banking'));
    }

    $: sign = ($balance < 0) ? '+' : '-';
    $: formattedBalance = `${sign} ${$balance}€`;

</script>

<FormLayout>
    <h2 slot="subheader">Ihr Kontostand</h2>

    <form slot="input" on:submit|preventDefault>
        <p class:euro={true}>{formattedBalance}</p>
    </form>
    <ButtonGroup slot="button-group" column="true">
        <Button label="Überweisung" on:click={gotoBanking}/>
        <Button label="Umsätze" muted="true"/>
    </ButtonGroup>
</FormLayout>

<style>
    .euro {
        font-size: var(--font-large);
        font-weight: bold;
    }

</style>