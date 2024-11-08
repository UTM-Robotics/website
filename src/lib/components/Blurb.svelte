<script>
	import GoalCell from './GoalCell.svelte';
</script>

<section class="goals">
	<h2 class="section-header">What we offer</h2>

	<div class="goal-grid">
		<GoalCell
			title="Workshops"
			description="We offer workshops throughout the academic year on a variety of topics, including Intro to Arduino, The Floor is Lava, and more! Our events are catered to students of all types, with a strong focus on beginner-friendly workshops."
		/>
		<GoalCell
			title="Projects"
			description="UTM Robotics connects students and mentors with UofT Robotics professors to complete for-credit project courses. In addition, we work on not-for-credit projects that are open to all students."
		/>
		<GoalCell
			title="Events"
			description="We aim to foster student interest and engagement in the field of Robotics through different events, such as general meetings, Battlebots viewing sessions, and Arduinos office hours."
		/>
		<GoalCell
			title="Community"
			description="We work with both the UTM community and the broader robotics community, introducing students to the world of robotics and providing them with the resources they need to succeed."
		/>
	</div>
</section>

<style>
	.goals {
		margin-top: 3rem;
		z-index: 1;
	}

	.goal-grid {
		padding: 1rem 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.7rem;
	}

	@media screen and (max-width: 750px) {
		.goal-grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
