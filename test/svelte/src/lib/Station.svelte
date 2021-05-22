<script lang="ts">
    import {onMount} from "svelte";

    export let x = "0";
    export let y = "0";
    export let name = "Unbekannte Station";

    let root;
    onMount(() => {
        console.log("Station mounted at " + x + ", " + y);
        console.log(this);
    })


    function clickHandler() {
        const options = {
            target: root,
            props: {
                cx: x,
                cy: y
            }
        }
        // const newStation = new StationPopup(options);
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

<circle
        bind:this={root}
        on:mouseover={ hoverHandler }
        on:mouseout={ unhoverHandler }
        on:click={ clickHandler }
        cx="{x}"
        cy="{y}"

        r="10"
        class="station">
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