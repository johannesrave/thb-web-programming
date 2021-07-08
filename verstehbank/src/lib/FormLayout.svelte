<section>
    <slot name="subheader"/>
    <slot name="input"/>
    <slot name="button-group"/>
    <slot name="progress"/>
</section>


<style>
    section {
        min-width: 280px;
        min-height: 480px;
        width: 320px;
        max-width: 90vh;
        grid-template-rows:
                [header] 4rem
                [input] auto
                [button-group] min-content
                [progress] min-content;

        display: grid;
        /*justify-items: center;*/
        place-items: center;
    }
</style>
