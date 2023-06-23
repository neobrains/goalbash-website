<script>
	import { onMount } from 'svelte';

	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Features from '$lib/components/Features.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(async () => {
		const faders = document.querySelectorAll('.fade-in');
		const fadersWithTransition = document.querySelectorAll('.fade-in-with-transition');
		const sliders = document.querySelectorAll('.slide-in');

		const appearOptions = {
			threshhold: 1,
			rootMargin: '0px 0px -50px 0px'
		};
		const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					console.log('not intersecting');
					return;
				} else {
					entry.target.classList.add('appear');
					appearOnScroll.unobserve(entry.target);
					console.log('intersecting');
				}
			});
		}, appearOptions);

		faders.forEach((fader) => {
			appearOnScroll.observe(fader);
		});

		sliders.forEach((slider) => {
			appearOnScroll.observe(slider);
		});

		fadersWithTransition.forEach((fader) => {
			appearOnScroll.observe(fader);
		});
	});
</script>

<svelte:head>
	<title>GoalBash</title>
	<meta name="title" content="GoalBash" />
	<meta name="description" content="GoalBash is a goal tracking app that helps you achieve your goals by breaking them down into small actionable steps." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://goalbash.neobrains.dev" />
	<meta property="og:title" content="GoalBash" />
	<meta property="og:description" content="GoalBash is a goal tracking app that helps you achieve your goals by breaking them down into small actionable steps." />
	<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://goalbash.neobrains.dev" />
	<meta property="twitter:title" content="GoalBash" />
	<meta property="twitter:description" content="GoalBash is a goal tracking app that helps you achieve your goals by breaking them down into small actionable steps." />
	<meta property="twitter:image" content="https://goalbash.neobrains.dev/goalbash.png" />
</svelte:head>

<Hero />
<About />
<Features />
<Quote />
<CTA />
<Pricing />
<FAQ />
<Contact />
<Footer />
