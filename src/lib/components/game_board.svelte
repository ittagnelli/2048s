<script>
	import Input from './input.svelte';
	import { score } from '../js/store';

	let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	let dir = 'NEUTRAL';

	function handle_move(e) {
		console.log(e.detail);
		dir = e.detail;
		$score += 10;
	}
</script>

<div class="griglia">
	{#each list as l}
		<div class="casella">{l}</div>
	{/each}
</div>

<Input on:move={handle_move} />

{dir}

<style>
	.griglia {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 10px;
		margin-top: 50px;
		padding: 10px;
		background-color: var(--cell-bg);
		border-radius: 6px;
	}

	.casella {
		aspect-ratio: 1;
		background-color: var(--cell-color);
		border-radius: 3px;
	}
</style>
