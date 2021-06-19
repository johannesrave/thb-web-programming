<script lang="ts">
    import RoundButton from "./RoundButton.svelte";
    import Title from "./Title.svelte";
    import { base } from '$app/paths'
</script>

<Title title={"Übersicht"}/>

<RoundButton link={base + '/banking'} name={'Geld senden'}/>
<RoundButton link={base + '/contacts'} name={'Kontakte pflegen'}/>
