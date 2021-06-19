<script>
    import { MaterialApp } from 'svelte-materialify';
    let theme = 'light';

    function toggleTheme() {
        if (theme === 'light') theme = 'dark';
        else theme = 'light';
    }
</script>

<MaterialApp {theme}>
    <button on:click="{toggleTheme}">Toggle Theme</button>
    ...
</MaterialApp>