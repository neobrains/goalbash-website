<script>
	const quote = {
		text: 'Without goals, and plans to reach them, you are like a ship that has set sail with no destination.',
		author: 'Fitzhugh Dodson'
	};
</script>

<div
	class="p-10 md:px-23 lg:px-32 py-36 md:py-32 lg:py-28 bg-indigo-50 flex flex-col justify-center items-center gap-4 overflow-x-hidden font-tt-norms-pro mt-20"
>
	<img src="/coffee.svg" alt="coffee" class="w-28 h-28 object-contain" />
	<span class="text-2xl font-semibold text-center w-full md:max-w-2xl">{quote.text}</span>
	<a
		href="https://en.wikipedia.org/wiki/Fitzhugh_Dodson"
		class="text-xl font-medium text-center border-b-4 pb-1 border-dashed border-gray-400 hover:text-green-500 hover:border-green-200 duration-300 transition-all ease-in-out"
		>- {quote.author}</a
	>
</div>
