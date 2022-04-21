<script lang="ts">
	export let title: string = 'Card title';
	export let text: string =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae unde ut sequi ipsam, fuga est praesentium porro! Minus illum est, hic, aliquam nobis eos repellendus, velit eligendi suscipit odio blanditiis!';
	export let line: boolean = false;
	export let lineH: boolean = false;
</script>

<article class="relative rounded-md bg-white px-6 pb-10 xl:max-w-[350px]">
	{#if line}
		<span
			class="absolute left-1/2 right-1/2 -top-1/2 z-[-1] h-32 w-2 -translate-x-1/2 bg-primary xl:hidden"
		/>
	{/if}
	{#if lineH}
		<span
			class="absolute top-1/2 z-[-1] hidden h-2 w-[1000px] bg-primary xl:block"
		/>
	{/if}
	<div
		class="absolute left-1/2 right-1/2 -top-12 flex aspect-square w-[90px] -translate-x-1/2 items-center justify-center rounded-full bg-secondary bg-cover bg-center xl:left-20"
	>
		<slot><!-- icon --></slot>
	</div>
	<header
		class="pt-20 text-center text-2xl font-bold text-neutral-700 xl:text-left"
	>
		<h2>{title}</h2>
	</header>
	<p
		class="mt-5 text-center text-base font-medium text-neutral-200 xl:text-left"
	>
		{text}
	</p>
</article>

<style>
	/* your styles go here */
</style>
