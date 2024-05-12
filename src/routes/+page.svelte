<script lang="ts">
	import { userFeelingsStore } from "$lib/stores/userFeelingsStore";
	import { goto } from '$app/navigation';
</script>

<div class="container h-full mx-auto flex justify-center items-center px-8">
	<div class="space-y-10 text-center flex flex-col items-center justify-center h-full">
		<div class="text-center">
		  <h1 class="text-3xl font-bold mb-5">How are you feeling today?</h1>
		</div>
		<div class="grid grid-cols-2 gap-4 mt-8">
		  <button on:click={() => {
			userFeelingsStore.setFeelingType('highEnergyUnpleasant');
			goto('/question');
		  }} class="bg-orange-500 hover:bg-orange-700 text-white font-bold w-32 h-32 rounded-full flex items-center justify-center">High Energy Unpleasant</button>
		  <button on:click={() => {
			userFeelingsStore.setFeelingType('highEnergyPleasant');
			goto('/question');
		  }} class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold w-32 h-32 rounded-full flex items-center justify-center">High Energy Pleasant</button>
		  <button on:click={() => {
			userFeelingsStore.setFeelingType('lowEnergyUnpleasant');
			goto('/question');
		  }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-32 h-32 rounded-full flex items-center justify-center">Low Energy Unpleasant</button>
		  <button on:click={() => {
			userFeelingsStore.setFeelingType('lowEnergyPleasant');
			goto('/question');
		  }} class="bg-green-500 hover:bg-green-700 text-white font-bold w-32 h-32 rounded-full flex items-center justify-center">Low Energy Pleasant</button>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
