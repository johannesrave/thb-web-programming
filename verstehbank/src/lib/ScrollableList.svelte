<div class="container">
    <div class="scroll-box">
        <slot/>
    </div>
</div>

<style>
    .container {
        overflow: hidden;
        width: 100%;
        border-radius: var(--radius-medium);
        border: solid 1px var(--muted-color);
        height: 18rem;
        max-height:100%;
        background-color: white;
    }

    .scroll-box {
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
    }
</style>