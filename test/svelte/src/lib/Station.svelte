<script lang="ts">
    import {onMount} from "svelte";
    import StationPopup from '../lib/StationPopup.svelte'

    export let x = "0";
    export let y = "0";
    export let name = "Unbekannte Station";

    let root;

    function clickHandler() {
        const options = {
            target: root,
            props: {
                cx: x,
                cy: y
            }
        }
        const newStation = new StationPopup(options);
        console.log("clicked station")
    }

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

<symbol
        bind:this={ root }
        on:mouseover={ hoverHandler }
        on:mouseout={ unhoverHandler }
        { x }
        { y }
>
    <circle
            on:click={ clickHandler }
            r="10"
            class="station">
    </circle>

</symbol>

<style>
    circle {
        stroke: white;
        fill: #9f0d56;
    }

    circle:hover {
        fill: white;
    }
</style>