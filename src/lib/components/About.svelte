<script>
	const about = [
		{
			index: 1,
			desc: 'Stay organized and focused with a centralized platform for tracking goals, tasks, and progress.'
		},
		{
			index: 2,
			desc: 'Enhance accountability by tracking deadlines, progress, and milestones.'
		},
		{
			index: 3,
			desc: 'Optimize time management with task and goal allocation using time blocking.'
		},
		{
			index: 4,
			desc: 'Boost confidence and motivation with clear visualizations of progress.'
		}
	];
</script>

<div
	id="about"
	class="flex flex-col gap-16 p-10 md:px-24 lg:px-32 w-full items-center mt-20 font-tt-norms-pro overflow-x-hidden"
>
	<div class="flex flex-col lg:flex-row max-w-7xl w-full items-center gap-10">
		<img src="/girlthinking.svg" alt="about" class="w-full lg:w-1/2 h-auto object-contain" />
		<div class="flex flex-col gap-4 w-full lg:w-1/2 p-4 justify-end">
			<div class="flex flex-col items-center lg:items-start pb-2 border-b-2 border-dotted">
				<span class="text-2xl font-semibold text-center lg:text-start tracking-wider max-w-7xl"
					>What is <span class="text-green-500">GoalBash</span>?</span
				>
				<span class="text-lg font-semibold text-center lg:text-start max-w-7xl">
					GoalBash is a goal tracking app that helps you to track your goals and habits, and
					motivates you to achieve more.
				</span>
			</div>
			<div class="flex flex-col gap-4 items-center lg:items-start">
				{#each about as card}
					<div
						class="flex flex-row items-center gap-4 bg-green-50 p-8 rounded-xl w-full hover:shadow-md hover:bg-green-100 transition-all duration-500 ease-in-out"
					>
						<span class="text-7xl">{card.index}.</span>
						<span class="text-sm lg:text-base font-medium text-center md:text-start max-w-7xl">
							{card.desc}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
