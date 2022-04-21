<script lang="ts">
	export let text: string;
	export let type: string = 'button';
	export let fluid: boolean = false;
	export let large: boolean = false;
</script>

<button
	{type}
	class={`rounded-full bg-primary px-5 py-2 font-bold text-white transition-all hover:bg-primary-focus active:scale-105
	${fluid && 'min-w-full'}
	${large && 'text-lg'}`}
>
	{text}
</button>

<style>
	/* your styles go here */
</style>
