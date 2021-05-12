<script lang="ts">
    import {onMount} from "svelte";

    export let cx = "0";
    export let cy = "0";

    let root;

    function hoverHandler() {
        root.setAttribute("r", "14");
        // console.log(root.getAttribute("r"))
    }

    function unhoverHandler() {
        root.setAttribute("r", "10");
        // console.log(root.getAttribute("r"))
    }

    onMount(() => {
        console.log("mounted station")
    })

</script>

<circle
        bind:this={ root }
        on:mouseover={ hoverHandler }
        on:mouseout={ unhoverHandler }
        { cx }
        { cy }
        r="10"
        class="station" >
</circle>

<style>
    circle {
        stroke: white;
        fill: #9f0d56;
    }

    circle:hover {
        fill: white;
    }
</style>