<script>
	const pricing = {
		t1: {
			type: 'Basic',
			category: 'Free',
			price: '0',
			features: [
				'1 Profile',
				'Basic Support',
				'10GB Storage',
				'Unlimited Public Projects',
				'Community Access'
			]
		},
		t2: {
			type: 'Soon',
			category: 'Premium',
			price: '15',
			features: [
				'All Basic Features',
				'Unlimited Profiles',
				'Priority Support',
				'20GB Storage',
				'Unlimited Public Projects',
				'Unlimed Private Projects',
			]
		},
	};
</script>

<div
	id="pricing"
	class="flex flex-col gap-16 p-10 md:px-24 lg:px-32 py-20 w-full items-center font-tt-norms-pro overflow-x-hidden bg-zinc-800"
>
	<span
		class="text-4xl font-bold text-center tracking-wider pb-2 border-b-4 border-dashed max-w-sm w-full text-white border-gray-300"
		>Pricing
	</span>
	<div class="flex flex-col lg:flex-row gap-4 items-start w-full max-w-4xl">
		<div
			class="w-full lg:w-2/5 border-2 flex flex-col p-8 rounded-2xl bg-gray-200 gap-4 hover:shadow-2xl transition-all duration-500 ease-in-out"
		>
			<span
				class="text-sm font-semibold px-4 py-1 border-2 border-gray-800 max-w-max rounded-full hover:bg-black hover:text-white transition duration-300 ease-in-out"
				>{pricing.t1.type}</span
			>
			<span class="text-4xl font-medium">{pricing.t1.category}</span>
			<div class="border-b border-gray-800 py-2" />
			<div class="flex flex-col gap-2">
				{#each pricing.t1.features as feature}
					<div class="flex flex-row gap-4 items-center">
						<img src="/checkmark.svg" alt="check" class="w-6 h-6 object-contain" />
						<span class="text-lg font-medium">{feature}</span>
					</div>
				{/each}
			</div>
			<div class="border-b border-gray-800 py-2" />
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<span class="text-2xl lg:text-5xl font-medium">&#x24;{pricing.t1.price}</span>
					<span class="text-base lg:text-lg text-gray-600 font-medium">/year</span>
				</div>
				<button
					class="px-4 py-2 flex flex-row items-center justify-center gap-1 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition duration-300 ease-in-out"
				>
					<span class="text-sm">Start Now</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg
					>
				</button>
			</div>
		</div>

		<div
			class="w-full lg:w-3/5 flex flex-col p-8 rounded-2xl bg-black gap-4 hover:shadow-2xl transition-all duration-500 ease-in-out"
		>
			<span
				class="text-sm font-semibold text-white px-4 py-1 border-2 border-white max-w-max rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
				>{pricing.t2.type}</span
			>
			<span class="text-4xl font-medium text-white">{pricing.t2.category}</span>
			<div class="border-b border-white py-2" />
			<div class="flex flex-col gap-2">
				{#each pricing.t2.features as feature}
					<div class="flex flex-row gap-4 items-center">
						<img src="/roundedcheckmark.svg" alt="check" class="w-6 h-6 object-contain" />
						<span class="text-lg font-medium text-white">{feature}</span>
					</div>
				{/each}
			</div>
			<div class="border-b border-white py-2" />
			<div class="flex items-center justify-between text-white">
				<div class="flex items-center gap-2">
					<span class="text-2xl lg:text-5xl font-medium">&#x24;{pricing.t2.price}</span>
					<span class="text-base lg:text-lg text-gray-300 font-medium">/year</span>
				</div>
				<button
					class="px-4 py-2 flex flex-row items-center justify-center gap-1 bg-green-300 text-black rounded-full font-medium hover:bg-green-200 transition duration-300 ease-in-out"
				>
					<span class="text-sm">Soon</span>
					<span class="text-sm">:/</span>
				</button>
			</div>
		</div>
	</div>
</div>
