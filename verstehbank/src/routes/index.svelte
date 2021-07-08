<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import FormLayout from '$lib/FormLayout.svelte';
    import Button from '$lib/Button.svelte';
    import { balance } from '$banking/accounts';

    let sign;
    const euroFormat = new Intl.NumberFormat('de-DE', {style: 'currency',currency: 'EUR',});
    let formattedBalance;

    // formattierung in Euro inspiriert von
    // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
    $: formattedBalance = euroFormat.format($balance);

    onMount(() => {
        $pageTitle = 'Übersicht';
    })

    const gotoBanking = () => {
        goto(rootRelative('/banking'));
    }

</script>

<FormLayout>
    <h2 slot="subheader">Ihr Kontostand</h2>

    <p slot="input" class:euro={true}>{formattedBalance}</p>
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