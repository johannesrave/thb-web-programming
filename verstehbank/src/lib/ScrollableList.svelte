<div class="container">
    <div class="scroll-box">
        <slot/>
    </div>
</div>

<style>
    .container {
        box-sizing: border-box;
        max-height:100%;
        width: 100%;
        border-radius: var(--radius-medium);
        height: 18rem;
        background-color: white;
        overflow: hidden;
    }

    .scroll-box {
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
    }
</style>