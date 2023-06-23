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

<Hero />
<About />
<Features />
<Quote />
<CTA />
<Pricing />
<FAQ />
<Contact />
<Footer />
