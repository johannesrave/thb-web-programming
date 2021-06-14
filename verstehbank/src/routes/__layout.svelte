<script lang="ts">
	// import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p class="footer-logo">VB</p>
	<p>Bei Fragen können Sie uns jederzeit <a href="">kontaktieren</a>.</p>
</footer>

<style>
	main {
		min-height: 100%;
	}

	footer {
		position: fixed;
		bottom: 0;

		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 64px;
		gap: 64px;

		background-color: dimgray;
	}

	p {
		color: white;
	}
</style>
