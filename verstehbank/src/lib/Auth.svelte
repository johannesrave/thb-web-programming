<script lang="ts" context="module">
    import { authenticated } from '../routes/stores.js';

    export async function load({ page, session, fetch, context }) {
        console.log("Not authenticated - redirecting.")
        if (authenticated === false) {
            console.log("Not authenticated - redirecting.")
            return {
                redirect: {
                    status: 401 ,
                    to: "/login",
                },
            };
        }
    }
</script>
