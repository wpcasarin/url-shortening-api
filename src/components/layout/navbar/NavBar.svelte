<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// local imports
	import logo from '$lib/assets/logo.svg';
	import NavLink from './NavLink.svelte';
	import MenuButton from './MenuButton.svelte';
	import MobileLink from './MobileLink.svelte';
	import { Button } from '../../buttons';
	// states
	let menuOpen: boolean = false;
</script>

<header class="flex">
	<div class="h-8 w-32">
		<img src={logo} alt="Logo" width="100%" height="auto" />
	</div>

	<nav class="flex flex-grow items-center justify-between">
		<ul class="ml-12 hidden gap-8 sm:flex">
			<NavLink text={'Features'} />
			<NavLink text={'Pricing'} />
			<NavLink text={'Resources'} />
		</ul>
		<ul class="hidden items-center gap-8 md:flex">
			<NavLink text={'Login'} />
			<li>
				<Button text={'Sign Up'} />
			</li>
		</ul>
		<!-- mobile -->
		<div class="ml-auto block md:hidden">
			<MenuButton bind:menuOpen />
		</div>
		{#if menuOpen}
			<div
				transition:scale={{
					duration: 500,
					start: 0.5,
					easing: quintOut
				}}
				class="absolute top-24 left-0 right-0 mx-auto flex max-w-screen-xs flex-col items-center gap-6 rounded-xl bg-secondary px-7 py-10 sm:max-w-screen-sm md:hidden"
			>
				<ul class="flex w-full flex-col items-center gap-6">
					<MobileLink text={'Features'} />
					<MobileLink text={'Pricing'} />
					<MobileLink text={'Resources'} />
				</ul>
				<span
					class="w-full gap-6 border-b border-white border-opacity-20 md:hidden"
				/>
				<ul class="flex w-full flex-col items-center gap-6 md:hidden">
					<MobileLink text={'Login'} />
					<li class="w-full">
						<Button text={'Sign Up'} large={true} fluid={true} />
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</header>

<style>
	/* your styles go here */
</style>
