<script lang="ts">
    import { goto, rootRelative } from '$util/navigation';
    import { loggedIn } from '$login/auth';
    import { page } from '$app/stores';
    import { browser } from '$app/env';

    $: if((!loggedIn) && ($page.path !== '/login') && browser){
        goto(rootRelative('/login'));
        console.log("Not authenticated, going back to login.");
    }

</script>
