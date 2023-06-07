<script>
	import { onMount } from 'svelte';
	export let nav;

	export let isMobileNavOpen = false;
	export let isMobileNavHidden = true;
	export let toggleMobileNav;

	onMount(async () => {
		const navScrollToElements = document.getElementsByClassName('nav-scroll-to');
		Array.from(navScrollToElements).forEach((element) => {
			element.addEventListener('click', () => {
				toggleMobileNav();
				const targetId = element.getAttribute('data-target');
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					setTimeout(() => {
						targetElement.scrollIntoView({ behavior: 'smooth' });
					}, 700);
				}
			});
		});
	});
</script>

<!--Mobile Navigation-->

<div
	id="mobilenav"
	class:h-0={isMobileNavHidden}
	class:h-screen={isMobileNavOpen}
	class:h-[100dvh]={isMobileNavOpen}
	class="h-0 w-screen fixed z-10 top-0 left-0 bg-black text-white overflow-x-hidden flex flex-col items-center justify-center gap-6"
>
	<div class="flex p-10 w-full items-end justify-end transition-all ease-in-out duration-300">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg
			on:click={toggleMobileNav}
			id="mobileCloseNav"
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"
			/></svg
		>
	</div>
	<div class="flex flex-col items-center justify-center gap-6 p-10">
		{#each nav as navbar_item}
			<div
				data-target={navbar_item.loc}
				class="text-2xl tracking-wider font-semibold px-4 py-2 border-t-2 hover:border-green-500 transition duration-300 ease-in-out nav-scroll-to"
			>
				{navbar_item.name}
			</div>
		{/each}
	</div>
	<div class="flex items-center justify-center gap-2 p-10">
		<a
			href="/login"
			class="text-xl tracking-wider font-semibold px-4 border-2 py-2 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
			>Login</a
		>
		<a
			href="/download"
			class="text-xl tracking-wider font-semibold px-4 border-2 py-2 hover:border-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
			>Download</a
		>
	</div>
</div>

<style>
	#mobilenav {
		transition: all 0.5s ease-in-out;
	}
</style>
