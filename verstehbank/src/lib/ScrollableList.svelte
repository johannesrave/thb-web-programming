<div class="container">
    <div class="scroll-box">
        <slot/>
    </div>
</div>

<style>
    .container {
        height: 100%;
        width: 100%;
        position: relative;
        box-sizing: border-box;
        border-radius: var(--radius-medium);
        border: 1px solid;
        background-color: white;
        overflow: hidden;
        min-height: 12rem;
    }

    .scroll-box {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        overflow: scroll;
        overflow-x: hidden;
    }
</style>