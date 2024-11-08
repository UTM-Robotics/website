<script>
	const { title, description } = $props();
</script>

<div class="goal">
	<h3 class="goal-title upper-style">{title}</h3>
	<p class="goal-desc">{description}</p>
</div>

<style>
	.goal-title {
		color: rgb(161, 161, 161);
		font-weight: 900;
		font-size: 1.025rem;
		margin-bottom: 0.5rem;
		margin-top: 0;
	}

	.goal-desc {
		color: aliceblue;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.5;
	}

	.goal {
		background-color: #111111;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid #333333;
	}
</style>
