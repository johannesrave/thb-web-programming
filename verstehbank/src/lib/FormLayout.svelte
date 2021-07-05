<section>
    <slot name="subheader"/>
    <slot name="input"/>
    <slot name="button-group"/>
    <slot name="progress"/>
</section>


<style>
    section {
        min-width: 320px;
        min-height: 480px;

        grid-template-rows:
                [header] 4rem
                [input] auto
                [button-group] min-content
                [progress] min-content;

        display: grid;
        justify-items: center;
        place-items: center;

        border: blue;
    }

    nav {

    }
</style>
