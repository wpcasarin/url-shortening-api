<script lang="ts">
	import illustration from '$lib/assets/illustration-working.svg';
	import { Button } from '../../buttons';
</script>

<section class="flex flex-col-reverse md:grid md:grid-cols-12">
	<article class="col-start-1 col-end-7 flex flex-col gap-4 lg:justify-center">
		<h1
			class="mt-8 text-center text-4xl font-bold leading-tight text-neutral-700 md:text-left md:text-5xl md:leading-[1.1] lg:text-6xl xl:text-[75px]"
		>
			More than just shorter links
		</h1>
		<p
			class="text-center text-lg font-medium text-neutral-200 md:text-left lg:text-[22px] lg:leading-normal"
		>
			Build your brand’s recognition and get detailed insights on how your links
			are performing.
		</p>
		<div class="mt-4 flex items-center justify-center md:justify-start">
			<Button text={'Get Started'} large={true} />
		</div>
	</article>
	<img
		src={illustration}
		alt="Person working at a desk"
		width="100%"
		height="auto"
		class="col-start-7 col-end-12 min-w-[510px] md:min-w-[600px] xl:col-start-8 xl:min-w-[730px]"
	/>
</section>

<style>
	/* your styles go here */
</style>
