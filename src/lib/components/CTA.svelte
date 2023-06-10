<script>
	const services = [
		{
			name: 'Login',
			href: '/login'
		},
		{
			name: 'Download For Android',
			href: '/download?platform=android'
		},
		{
			name: 'Download For iOS',
			href: '/download?platform=ios'
		}
	];
</script>

<section
	class="flex p-10 md:px-24 lg:px-32 py-40 font-tt-norms-pro overflow-x-hidden w-full items-center justify-center"
>
	<div class="flex flex-col md:flex-row items-center w-full max-w-7xl justify-center gap-16">
		<img src="/castle.svg" alt="crown" class="w-72 h-72 object-contain fade-in" />
		<div class="flex flex-col gap-2 items-center md:items-start text-center md:text-start fade-in">
			<h2 class="text-4xl font-semibold">Motivated to achieve your goals?</h2>
			<h4 class="text-xl font-medium">Start your journey to success today!</h4>
			<div class="flex flex-col lg:flex-row items-center justify-center gap-2 w-full pt-4">
				{#each services as service}
					<a
						href={service.href}
						class="text-xl w-full lg:max-w-max tracking-wider font-semibold px-4 border-2 border-dashed py-2 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
						>{service.name}</a
					>
				{/each}
			</div>
		</div>
	</div>
</section>
