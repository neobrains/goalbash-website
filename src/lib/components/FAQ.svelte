<script>
	import { slide } from 'svelte/transition';
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

	let current = null;
</script>

<section
	class="flex flex-col gap-16 p-10 md:px-24 lg:px-32 py-32 w-full items-center font-tt-norms-pro overflow-x-hidden"
>
	<div class="flex flex-col lg:flex-row w-full max-w-7xl items-center lg:items-start gap-8">
		<div class="flex flex-col gap-4 w-full lg:w-1/2">
			<h2 class="text-4xl font-medium text-center lg:text-start">Frequently Asked Questions</h2>
			<h4
				class="text-lg font-medium text-center lg:text-start hover:text-green-400 transition-all duration-300 ease-in-out cursor-pointer"
				>Still need help? Join us on Discord.</h4
			>
		</div>

		<div class="grid gap-2 w-full">
			{#each faqs as faq, i}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => (current = current === faq.qno ? null : faq.qno)}
					class="p-8 rounded-2xl bg-green-100 border-2 border-black"
				>
					<button class="font-medium">
						<p class="text-start">{faq.question}</p>
					</button>
					{#if current === i + 1}
						<p class="font-normal text-start" transition:slide>{faq.answer}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
