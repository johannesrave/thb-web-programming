<script lang="ts">
    export let link: string;
    export let name: string;
</script>

<div>
    <a href={link}>{name}</a>
</div>

<style>
    a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 120px;
        width: 120px;

        border-radius: 50%;
        background-color: dimgrey;

        color: white;
        font-size: 24px;
        text-align: center;
        filter: drop-shadow(12px 12px 12px rgba(0 0 0 .25));
    }
</style>