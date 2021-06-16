<script lang="ts">
    import Title from "../../lib/Title.svelte";
    import RoundButton from "../../lib/RoundButton.svelte";
</script>

<Title>Onlinebanking</Title>

<RoundButton link={'/'} name={'Weiter'}/>

<RoundButton link={'/'} name={'Zurück'}/>


<style>
    section {
        display: flex;
        flex-flow: column;
        min-height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>