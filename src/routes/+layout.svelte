<script>
	import '../reset.css';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource-variable/overpass';
</script>

<svelte:head>
	<title>UTM Robotics</title>
</svelte:head>

<div class="page">
	<Header />

	<slot />

	<Footer />
</div>

<style>
	.page {
		background-color: black;
	}
</style>
