<script lang="ts">
	import Blurb from '$lib/components/Blurb.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Team from '$lib/components/Team.svelte';

	export let data;
</script>

<Hero />

<main class="home fade-in-up" id="main">
	{#if data?.events}
		<Events events={data.events} />
	{/if}
	<Blurb />
	<Team />
	<Contact />
</main>

<style>
	#main {
		animation: fade-in-up 0.6s ease-out;
		margin: 0 auto;
		position: relative;
		width: 80%;
	}

	@keyframes fade-in-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
