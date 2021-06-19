<script lang="ts">
    import { user } from '$lib/./stores'
</script>


<footer>
    <button on:click|preventDefault={() => user.logout()}>Abmelden</button>
    <a href="">Fragen?</a>
</footer>

<style>
    footer {
        color: white;
        border: white 1px solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /*gap: 16px;*/
        /*padding: 16px;*/

        background-color: dimgray;
    }

    p {
        color: white;
    }
</style>
