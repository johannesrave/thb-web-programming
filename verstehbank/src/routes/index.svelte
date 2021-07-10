<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { onMount } from 'svelte';
    import { pageTitle } from '$util/pageTitle';
    import Layout from '../lib/Layout.svelte';
    import Button from '$lib/Button.svelte';
    import { balance } from '$banking/accounts';
    import Nav from '$lib/Nav.svelte';

    let sign;
    const euroFormat = new Intl.NumberFormat('de-DE', {style : 'currency', currency : 'EUR',});
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

<Layout>
    <h1>Übersicht</h1>
    <h2>Ihr Kontostand</h2>
    <p class:euro={true}>{formattedBalance}</p>
    <ButtonGroup column="true">
        <Button label="Überweisung" on:click={gotoBanking}/>
        <Button label="Umsätze" muted="true"/>
    </ButtonGroup>
<!--    <Nav/>-->
</Layout>

