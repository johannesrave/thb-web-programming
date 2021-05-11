<script lang="ts">
    import Station from '$lib/Station'
    import {onMount} from 'svelte';

    let mapOriginal;
    let mapData = {};

    onMount(() => {
        for (let group of mapOriginal.children) {
            const stadtteil = group.classList[1];

            mapData[stadtteil] = ({
                // stadtteil: stadtteil,
                stations: {}
            })
            // console.log(mapData[stadtteil]);

            group.getElementsByClassName("station")

            let newStations = document.createElementNS("http://www.w3.org/2000/svg", "g");

            for (let child of group.children) {
                if (child.classList.contains("station")) {
                    const station = child.classList[1];
                    mapData[stadtteil]['stations'][station] =
                        {
                            x: child.getAttribute("cx"),
                            y: child.getAttribute("cy")
                        }

                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    rect.setAttribute("x", child.getAttribute("cx"));
                    rect.setAttribute("y", child.getAttribute("cy"));

                    rect.setAttribute("width", "20");
                    rect.setAttribute("height", "20");


                    child.remove();
                    newStations.appendChild(rect);
                    newStations.appendChild(new Station({
                        target:station,
                        cx:child.getAttribute("cx"),
                        cy:child.getAttribute("cx"),
                    }));
                }
            }
        }

        console.log(mapData)
    })


    const radius = 10;

</script>


<style>
    svg path {
        fill: #a80c60;
        stroke: white;
        stroke-width: 2px;
    }

    svg path:hover {
        fill: #DA4567;
    }

    svg circle {
        fill: #c1ff2e;
    }

    svg rect {
        fill: #c1ff2e;
    }

    svg circle:hover {
        fill: #c1ff2e;
    }

</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1002 558">
    <g bind:this={mapOriginal} class="map_split">
        <g class="stadtteil west">
            <path stroke-width="4"
                  d="M429 293L315.5 503.5h-68l-40-109.5L68 415.5l-65-151L225 244l40.5-147.5 148.5 132 15 64.5z"
                  class="west background"/>
            <circle cx="48" cy="291" r="{radius}" class="station 19"/>
            <circle cx="229" cy="264" r="{radius}" class="station 20"/>
            <circle cx="283" cy="152" r="{radius}" class="station 21"/>
            <circle cx="369" cy="278" r="{radius}" class="station 23"/>
            <circle cx="360" cy="377" r="{radius}" class="station 24"/>
            <circle cx="266" cy="480" r="{radius}" class="station 25"/>
        </g>
        <g class="stadtteil nordost">
            <path stroke-width="4"
                  d="M566.5 171L669 230.078 798.5 205.5l71 44 106.5-21-100-104L716.5 56 577 111l-10.5 60z"
                  class="nordost background"/>
            <circle cx="594" cy="152" r="{radius}" class="station 26"/>
            <circle cx="838" cy="152" r="{radius}" class="station 16"/>
            <circle cx="715" cy="78" r="{radius}" class="station 17"/>
        </g>
        <g class="stadtteil nord">
            <path stroke-width="4" d="M566.5 171l10.5-60-97-25.5-49.5-69-95-13.5-70 93.5 148.5 132L566.5 171z"
                  class="nord background"/>
            <circle cx="414" cy="197" r="{radius}" class="station 18"/>
            <circle cx="335" cy="115" r="{radius}" class="station 22"/>
        </g>
        <g class="stadtteil ost">
            <path stroke-width="4" d="M680 316l-11-85.922L798.5 205.5l71 44 106.5-21 23 96-66.5 34-38 72L680 316z"
                  class="ost background"/>
            <circle cx="715" cy="253" r="{radius}" class="station 6"/>
            <circle cx="813" cy="244" r="{radius}" class="station 7"/>
            <circle cx="909" cy="273" r="{radius}" class="station 8"/>
            <circle cx="900" cy="358" r="{radius}" class="station 9"/>
        </g>
        <g class="stadtteil suedost">
            <path stroke-width="4" d="M680 316l-71 42.5 96.5 196 176-42 13-82L680 316z" class="suedost background"/>
            <circle cx="863" cy="434" r="{radius}" class="station 10"/>
            <circle cx="715" cy="517" r="{radius}" class="station 11"/>
            <circle cx="661" cy="425" r="{radius}" class="station 14"/>
        </g>
        <g class="stadtteil sued">
            <path stroke-width="4" d="M429 293l102.5-10 77.5 75.5 96.5 196L429 465l-113.5 38.5L429 293z"
                  class="sued background"/>
            <circle cx="526" cy="460" r="{radius}" class="station 12"/>
            <circle cx="586" cy="422" r="{radius}" class="station 13"/>
            <circle cx="569" cy="338" r="{radius}" class="station 15"/>
        </g>
        <g class="stadtteil zentrum">
            <path stroke-width="4" d="M566.5 171L669 230.078 680 316l-71 42.5-77.5-75.5L429 293l-15-64.5L566.5 171z"
                  class="zentrum background"/>
            <circle cx="557" cy="203" r="{radius}" class="station 2"/>
            <circle cx="565" cy="264" r="{radius}" class="station 5"/>
            <circle cx="652" cy="273" r="{radius}" class="station 3"/>
            <circle cx="436" cy="244" r="{radius}" class="station 4"/>
        </g>
    </g>
</svg>
