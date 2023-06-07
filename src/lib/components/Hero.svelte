<script>
	import { onMount } from 'svelte';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';

	const nav = [
		{ name: 'Features', loc: 'features' },
		{ name: 'Pricing', loc: 'pricing' },
		{ name: 'Contact', loc: 'contact' },
		{ name: 'About', loc: 'about' }
	];

	let isMobileNavOpen = false;

	function toggleMobileNav() {
		isMobileNavOpen = !isMobileNavOpen;
	}

	onMount(async () => {
		const scroll_down = document.getElementById('scroll-down');
		scroll_down.addEventListener('click', () => {
			document.getElementById('about').scrollIntoView({
				behavior: 'smooth'
			});
		});

		const navScrollToElements = document.getElementsByClassName('nav-scroll-to');
		Array.from(navScrollToElements).forEach((element) => {
			element.addEventListener('click', () => {
				const targetId = element.getAttribute('data-target');
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});
	});
</script>

<MobileNavigation {nav} {isMobileNavOpen} {toggleMobileNav} />

<main class="flex flex-col min-h-screen font-tt-norms-pro overflow-hidden">
	<div class="flex flex-col lg:flex-row h-full lg:h-screen w-full">
		<div class="h-full w-full lg:w-1/3 bg-green-500 flex flex-col p-10">
			<div class="flex items-center justify-between">
				<h2 class="text-2xl font-semibold tracking-wider">GOALBASH</h2>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg on:click={toggleMobileNav} id="mobileOpenNav" class="lg:hidden" viewBox="0 0 100 80" width="20" height="20">
					<rect width="100" height="15" />
					<rect y="30" width="100" height="15" />
					<rect y="60" width="100" height="15" />
				</svg>
			</div>
			<div class="w-full h-screen lg:h-full flex flex-col items-center justify-center gap-6">
				<h1 class="text-6xl font-bold text-white text-center lg:text-start"
					>BE THE HERO OF YOUR LIFE</h1
				>
				<h2 class="text-2xl font-medium tracking-wide text-white text-center lg:text-start"
					>Transform your aspirations into actionable plans and live a life of success and
					fulfillment with GoalBash.</h2
				>
				<div
					id="scroll-down"
					class="flex items-center justify-center p-2 border-2 rounded-full animate-bounce lg:hidden"
				>
					<svg
						class="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</div>
		<div class="h-full w-full lg:w-2/3 flex flex-col p-10">
			<div class="hidden lg:flex items-center justify-between">
				<div class="items-center @container w-full flex">
					{#each nav as navbar_item}
						<div
							data-target={navbar_item.loc}
							class="text-xl cursor-pointer tracking-wider font-semibold @xs:px-1 @md:px-2 @lg:px-4 py-2 border-t-2 hover:border-green-500 transition duration-300 ease-in-out nav-scroll-to"
						>
							{navbar_item.name}
						</div>
					{/each}
				</div>
				<div class="flex items-center justify-center gap-2">
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
			<div class="hidden lg:flex items-center justify-center lg:justify-end w-full h-full">
				<img src="/hero.svg" alt="hero_svg" class="w-full h-full object-contain" />
			</div>
		</div>
	</div>
</main>
