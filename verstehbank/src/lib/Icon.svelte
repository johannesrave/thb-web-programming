<script lang="ts">
    export let icon: Icons = "arrow-right";

    import ArrowBack from '$lib/icons/arrow-ios-back-outline.svelte';
    import ArrowForward from '$lib/icons/arrow-ios-forward-outline.svelte';
    import ArrowLeft from '$lib/icons/arrow-left.svelte';
    import ArrowRight from '$lib/icons/arrow-right.svelte';
    import ArrowHeadLeft from '$lib/icons/arrowhead-left-outline.svelte';
    import CornerLeftUp from '$lib/icons/corner-left-up-outline.svelte';
    import CornerUpLeft from '$lib/icons/corner-up-left.svelte';
    import Edit from '$lib/icons/edit-2.svelte';
    import Keypad from '$lib/icons/keypad.svelte';
    import LogIn from '$lib/icons/log-in-outline.svelte';
    import LogOut from '$lib/icons/log-out-outline.svelte';
    import PaperPlane from '$lib/icons/paper-plane.svelte';
    import Upload from '$lib/icons/upload.svelte';

    const icons =
    {
     "arrow-ios-back-outline":ArrowBack,
     "arrow-ios-forward-outline":ArrowForward,
     "arrow-left":ArrowLeft,
     "arrow-right":ArrowRight,
     "arrowhead-left-outline":ArrowHeadLeft,
     "corner-left-up-outline":CornerLeftUp,
     "corner-up-left":CornerUpLeft,
     "edit-2":Edit,
     "keypad":Keypad,
     "log-in-outline":LogIn,
     "log-out-outline":LogOut,
     "paper-plane":PaperPlane,
     "upload":Upload,
    }

    export type Icons = keyof typeof icons;
</script>

<svelte:component this={icons[icon]}/>
