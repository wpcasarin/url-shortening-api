<script>
	import ShortenButton from './ShortenButton.svelte';
	import ShortenInput from './ShortenInput.svelte';
	// methods
	const handleSubmit = () => {
		console.log('submit');
	};
</script>

<section
	class="rounded-lg bg-secondary bg-right-top bg-no-repeat p-6 md:rounded-xl md:py-14 md:px-16"
>
	<form
		on:submit|preventDefault={handleSubmit}
		class="grid min-h-full flex-grow grid-rows-2 gap-y-3 gap-x-6 md:flex md:min-h-[60px]"
	>
		<div class="row-auto w-full flex-grow">
			<ShortenInput />
		</div>
		<div class="row-auto min-w-[190px] flex-grow">
			<ShortenButton />
		</div>
	</form>
</section>

<style>
	/* your styles go here */
	section {
		background-image: url('../../lib/assets/bg-shorten-mobile.svg');
	}
	@media (min-width: 768px) {
		section {
			background-image: url('../../lib/assets/bg-shorten-desktop.svg');
			background-size: cover;
		}
	}
</style>
