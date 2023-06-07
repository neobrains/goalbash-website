<script>
	const features = [
		{
			index: 1,
			name: 'Time Blocking',
			description: 'Allocating specific times to tasks and goals for better time management.',
			image: 'checklist.svg'
		},
		{
			index: 2,
			name: 'Calender Integration',
			description:
				'Syncing personal or professional calendars with the app to avoid scheduling conflicts.',
			image: 'calendar.svg'
		},
		{
			index: 3,
			name: 'Scheduling',
			description:
				'Allowing users to assign deadlines to tasks and goals for better planning and execution.',
			image: 'schedule.svg'
		},
		{
			index: 4,
			name: 'Long-term Goal Setting',
			description:
				'Enabling users to set and track progress towards long-term goals by breaking them down into shorter-term milestones.',
			image: 'writingdown.svg'
		},
		{
			index: 5,
			name: 'Progress Tracking',
			description:
				'Providing users with options to track their progress, view achievements, and identify areas for improvement.',
			image: 'analytics.svg'
		},
		{
			index: 6,
			name: 'User-friendly Interface',
			description:
				'Offering a user-friendly and intuitive interface for seamless navigation and goal management.',
			image: 'userfriendly.svg'
		}
	];
</script>

<section
	id="features"
	class="flex flex-col gap-16 p-10 md:px-24 lg:px-32 w-full items-center font-tt-norms-pro overflow-x-hidden"
>
	<h2
		class="text-4xl font-bold text-center tracking-wider pb-2 border-b-4 border-dashed max-w-sm w-full border-gray-300"
	>
		FEATURES
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-7xl">
		{#each features as feature}
			<div
				class="flex flex-col items-center md:items-start justify-center md:justify-start gap-2 bg-green-50 p-12 rounded-xl hover:shadow-md hover:bg-green-100 transition-all duration-500 ease-in-out"
			>
				<img src="/{feature.image}" alt={feature.name} class="w-36 h-36 object-contain" />
				<div class="border-b-2 border-green-200 w-full mt-2 mb-2 border-dashed" />
				<h3 class="text-xl font-semibold text-center md:text-start tracking-wider max-w-2xl"
					>{feature.name}</h3
				>
				<p class="text-lg font-medium text-center md:text-start max-w-md"
					>{feature.description}</p
				>
			</div>
		{/each}
	</div>
</section>
