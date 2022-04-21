<script>
	import { ShortenLink } from '../components/shorten';
	import { HeroSection } from '../components/layout/hero';
	import { NavBar } from '../components/layout/navbar';
</script>

<div class="container mt-10 sm:mt-14 xl:max-w-[1110px]">
	<NavBar />
	<main>
		<div class="mt-8 md:mt-20">
			<HeroSection />
		</div>
		<div class="relative mt-20">
			<div
				class="absolute top-1/2 -left-1/2 -right-1/2 -z-10 h-screen bg-[#eff1f7]"
			/>
			<ShortenLink />
		</div>

		<article class="mx-auto mt-20 flex flex-col items-center md:mt-32">
			<h2 class="text-center text-3xl font-bold text-neutral-700 md:text-4xl">
				Advanced Statistics
			</h2>
			<p
				class="mt-6 max-w-xl text-center font-medium text-neutral-200 md:text-xl md:leading-relaxed"
			>
				Track how your links are performing across the web with our advanced
				statistics dashboard.
			</p>
		</article>
	</main>
</div>

<style>
	/* your styles go here */
</style>
