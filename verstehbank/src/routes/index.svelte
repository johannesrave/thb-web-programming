<script lang="ts">
    import Button from "$lib/RoundButton.svelte";
    import Title from "$lib/Title.svelte";
    import { base } from '$app/paths'
    import ButtonGroup from "../lib/ButtonGroup.svelte";
    import {user} from "../lib/auth";
</script>

<Title title={"Übersicht"}/>
<h2>Ihr Kontostand</h2>
<h3>


            {$user}
</h3>
<ButtonGroup>
    <Button link={base + '/banking'} name={'Geld senden'}/>
</ButtonGroup>
