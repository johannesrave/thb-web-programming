<script lang="ts">
    import Station from '$lib/Station.svelte';
    import Netzplan from '$lib/Netzplan.svelte';
    import { onMount } from 'svelte';
    import { planData } from '$lib/stores';

    let plan: SVGGElement;
    let netzplan: SVGElement;

    onMount(() => {

        // console.log(netzplan.id)

        console.log("mounted map")
        // const stadtteile: HTMLCollection = plan.children;
        //
        // for (let stadtteil of stadtteile) {
        //     const stadtteilName = stadtteil.classList[1];
        //
        //
        //     for (let [station, coords] of Object.entries(planData[stadtteilName].stations)) {
        //
        //         const options = {
        //             target: stadtteil,
        //             props: {
        //                 x: coords.x.toString(),
        //                 y: coords.y.toString()
        //             }
        //         }
        //         console.log(options)
        //
        //         const newStation = new Station(options);
        //         // stadtteil.appendChild(newStation);
        //     }
        // }
    })
</script>


<style>
    svg {
        width: 100vw;
        height: 100vh;

        display: grid;
        align-items: center;
        justify-content: center;
    }


    svg path {
        fill: #a80c60;
        stroke: white;
        stroke-width: 2px;
    }

    svg path:hover {
        fill: #DA4567;
    }
</style>

<Netzplan bind:this={ netzplan }/>
<!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1002 558">-->
<!--    <g bind:this={ plan } class="map_split">-->
<!--        <g class="stadtteil west">-->
<!--            <path stroke-width="4"-->
<!--                  d="M429 293L315.5 503.5h-68l-40-109.5L68 415.5l-65-151L225 244l40.5-147.5 148.5 132 15 64.5z"-->
<!--                  class="west background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil nordost">-->
<!--            <path stroke-width="4"-->
<!--                  d="M566.5 171L669 230.078 798.5 205.5l71 44 106.5-21-100-104L716.5 56 577 111l-10.5 60z"-->
<!--                  class="nordost background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil nord">-->
<!--            <path stroke-width="4" d="M566.5 171l10.5-60-97-25.5-49.5-69-95-13.5-70 93.5 148.5 132L566.5 171z"-->
<!--                  class="nord background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil ost">-->
<!--            <path stroke-width="4" d="M680 316l-11-85.922L798.5 205.5l71 44 106.5-21 23 96-66.5 34-38 72L680 316z"-->
<!--                  class="ost background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil suedost">-->
<!--            <path stroke-width="4" d="M680 316l-71 42.5 96.5 196 176-42 13-82L680 316z"-->
<!--                  class="suedost background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil sued">-->
<!--            <path stroke-width="4" d="M429 293l102.5-10 77.5 75.5 96.5 196L429 465l-113.5 38.5L429 293z"-->
<!--                  class="sued background"/>-->
<!--        </g>-->
<!--        <g class="stadtteil zentrum">-->
<!--            <path stroke-width="4" d="M566.5 171L669 230.078 680 316l-71 42.5-77.5-75.5L429 293l-15-64.5L566.5 171z"-->
<!--                  class="zentrum background"/>-->
<!--        </g>-->
<!--    </g>-->
<!--</svg>-->
