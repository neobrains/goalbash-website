<script>
	const faqs = [
		{
			qno: 1,
			question: 'What are profiles and how do they work?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ut quam bibendum, aliquet turpis at posuere.'
		},
		{
			qno: 2,
			question: 'What is the difference between a free and a paid account?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ut quam bibendum, aliquet turpis at posuere.'
		},
		{
			qno: 3,
			question: 'What is the difference between a free and a paid account?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ut quam bibendum, aliquet turpis at posuere.'
		},
		{
			qno: 4,
			question: 'What is the difference between a free and a paid account?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ut quam bibendum, aliquet turpis at posuere.'
		},
		{
			qno: 5,
			question: 'What is the difference between a free and a paid account?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Sed ut quam bibendum, aliquet turpis at posuere.'
		}
	];

	let currentlyOpen;
</script>

<div
	class="flex flex-col gap-16 p-10 md:px-24 lg:px-32 py-32 w-full items-center font-tt-norms-pro overflow-x-hidden"
>
	<div class="flex flex-col lg:flex-row w-full max-w-7xl items-center lg:items-start gap-8">
		<div class="flex flex-col gap-4 w-full lg:w-1/2">
			<span class="text-4xl font-medium text-center lg:text-start">Frequently Asked Questions</span>
			<span
				class="text-lg font-medium text-center lg:text-start hover:text-green-400 transition-all duration-300 ease-in-out cursor-pointer"
				>Still need help? Join us on Discord.</span
			>
		</div>

		<div class="flex flex-col gap-4 w-full lg:w-1/2 select-none">
			{#each faqs as faq}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="border-2 p-8 border-black rounded-2xl bg-green-100">
					<details on:click={() => currentlyOpen = faq.qno} class="font-medium">
						<summary>{faq.question}</summary>
					</details>
					<!-- svelte-ignore a11y-incorrect-aria-attribute-type -->
					<div class="reveal font-normal" aria-hidden="aria-hidden">
						<div>
							<p>{faq.answer}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	details summary ~ * {
		position: fixed;
		top: 100%;
	}
	details + .reveal {
		display: grid;
		grid-template-rows: 0fr;
		grid-gap: 1em;
		transition: 0.4s;
	}
	details[open] + .reveal {
		grid-template-rows: 1fr;
	}
	details + .reveal div {
		overflow: hidden;
		margin: 0;
	}
</style>
