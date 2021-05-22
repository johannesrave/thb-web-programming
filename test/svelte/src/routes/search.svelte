<script lang="ts">
    import Map from "$lib/Map.svelte";
</script>

<main>
    <section>
        <Map/>
    </section>

    <aside>
        <div>
            <button>
                NUTZUNG
            </button>
            <button>
                TAGESZEIT
            </button>
            <button>
                ZEITRAUM
            </button>
            <button>
                ZUSAMMENFASSUNG
            </button>
        </div>
    </aside>
</main>

<style>
    main {
        width: 100vw;
        height: 100vh;

        display: grid;
        align-items: center;
        justify-content: center;
    }

    section {
        width: 100vw;
        height: 100vh;

        grid-area: 1 / 1;
    }

    aside {
        grid-area: 1 / 1;

        display: grid;
        align-items: center;
        justify-content: start;
        padding: 32px;
    }

    div {
        width: 16rem;

    }

    button {
        align-self: center;
        width: 100%;
        text-align: center;
        background-color: #2172cd;
        padding: .5rem;
    }

    button:hover {
        color: white;
        background-color: #094280;
    }
</style>
