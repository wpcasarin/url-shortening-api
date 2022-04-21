<script>
	import { ShortenLink } from '../components/shorten';
	import { HeroSection } from '../components/layout/hero';
	import { NavBar } from '../components/layout/navbar';
	import { Card } from '../components/layout/card';
	import icon1 from '$lib/assets/icon-brand-recognition.svg';
	import icon2 from '$lib/assets/icon-detailed-records.svg';
	import icon3 from '$lib/assets/icon-fully-customizable.svg';
</script>

<div class="container mt-10 sm:mt-14 xl:max-w-[69.375rem]">
	<NavBar />
	<main>
		<div class="mt-8 md:mt-20">
			<HeroSection />
		</div>
		<div class="relative mt-20">
			<div
				class="absolute top-1/2 -left-1/2 -right-1/2 -z-10 h-[200vh] bg-[#eff1f7]"
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
		<section
			class="min-w-screen-xs md:min-w-screen-sm mx-auto mt-24 flex w-full flex-col justify-center gap-y-24 xl:mx-0 xl:flex-row xl:justify-between"
		>
			<div>
				<Card
					lineH={true}
					title={'Brand Recognition'}
					text={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}
				>
					<img src={icon1} alt="Card icon" />
				</Card>
			</div>
			<div class="xl:mt-12">
				<Card
					line={true}
					title={'Detailed Records'}
					text={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}
				>
					<img src={icon2} alt="Card icon" />
				</Card>
			</div>
			<div class="xl:mt-24">
				<Card
					line={true}
					title={'Fully Customizable'}
					text={' Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
				>
					<img src={icon3} alt="Card icon" />
				</Card>
			</div>
		</section>
	</main>
</div>

<style>
	/* your styles go here */
</style>
