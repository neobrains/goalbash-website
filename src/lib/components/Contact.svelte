<script>
	let contactSourceSelected;
</script>

<section
	id="contact"
	class="flex flex-col w-full p-10 md:px-24 lg:px-32 font-tt-norms-pro overflow-x-hidden items-center"
>
	<div class="flex flex-col w-full max-w-7xl gap-16">
		<div class="flex flex-col items-center lg:items-start gap-2">
			<h2 class="text-4xl font-medium tracking-wider text-center lg:text-start w-full"
				>Love to hear from you,</h2
			>
			<h2 class="text-4xl font-medium tracking-wider text-center lg:text-start w-full"
				>Get in touch 👋</h2
			>
		</div>
		<form id="contactform" class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
			<div class="flex flex-col gap-2">
				<label for="name" class="text-lg font-medium">Name</label>
				<input
					required
					autocomplete="off"
					type="text"
					id="name"
					name="name"
					class="w-full p-2 bg-gray-100"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<label for="email" class="text-lg font-medium">Email</label>
				<input required type="email" id="email" name="email" class="w-full p-2 bg-gray-100" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="source" class="text-lg font-medium"
					>How did you come to know about GoalBash?</label
				>
				<select
					required
					bind:value={contactSourceSelected}
					id="source"
					name="source"
					class="w-full p-2 bg-gray-100"
				>
					<option value="search-result">Search Result</option>
					<option value="social-media">Social Media</option>
					<option value="friend">Friend</option>
					<option value="other">Other</option>
				</select>

				{#if contactSourceSelected === 'other'}
					<input
						type="text"
						id="source-other"
						name="source-other"
						class="w-full p-2 bg-gray-100 fade-in"
					/>
				{/if}
			</div>
			<div class="flex flex-col gap-2">
				<label for="message" class="text-lg font-medium">Message</label>
				<textarea required id="message" name="message" class="w-full p-2 bg-gray-100" rows="5" />
			</div>
		</form>
		<button
			class="px-4 lg:px-36 py-2 text-white bg-black w-full lg:max-w-max hover:cursor-ne-resize"
			>Just Send ↗</button
		>
	</div>
</section>

<style>
	/* Come from up animation */
	.fade-in {
		animation: fadeIn 0.5s ease-in-out;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(-10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
