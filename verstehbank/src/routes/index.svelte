<script lang="ts">
    import Button from "$lib/RoundButton.svelte";
    import Title from "$lib/Title.svelte";
    import { base } from '$app/paths'
    import ButtonGroup from "../lib/ButtonGroup.svelte";
</script>

<Title title={"Übersicht"}/>
<h2>Ihr Kontostand</h2>
<h3>

    53,00 Euro

</h3>
<ButtonGroup>
    <Button link={base + '/banking'} name={'Geld senden'}/>
<!--    <RoundButton link={base + '/contacts'} name={'Kontakte pflegen'}/>-->
</ButtonGroup>
