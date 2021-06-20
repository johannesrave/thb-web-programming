<script lang="ts">
    import RoundButton from "./RoundButton.svelte";
    import Title from "./Title.svelte";
    import { base } from '$app/paths'
</script>

<Title title={"Übersicht"}/>
<h2>Ihr Kontostand</h2>
<h3>

    53,00 Euro

</h3>
<RoundButton link={base + '/banking'} name={'Geld senden'}/>
<RoundButton link={base + '/contacts'} name={'Kontakte pflegen'}/>
