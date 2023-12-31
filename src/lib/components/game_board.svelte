<script>
	import Input from './input.svelte';
	import { score } from '../js/store';

	function getRandomInt(min, max) {
		/* random number in a range >= n && < m */
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
	}

	function move(i, final_index) {
		/* general function to move cells using initial index and final index of the cell */
		list[final_index] = list[i];
		final_index != i ? (list[i] = '') : null;
	}

	function join(a, b) {
		console.log("sono uguali " + a + " e " + b);
		list[b] = String(list[a] * 2);
		list[a] = '';
		$score += Number(list[b]);
	}

	function control(initial_index, final_index, increment) {
		console.log(initial_index, final_index);

		for (let i = initial_index + increment; i != final_index + increment; i += increment) {
			console.log(i);
			if (list[i] !== list[initial_index] && list[i] !== '') break;
			list[i] === list[initial_index] ? join(i, initial_index) : null;
		}

		move(initial_index, final_index);
	}

	function motion(direction) {
		/* selector of the type of movement, it will be deal with the event created by component input */
		for (let i = 0; i < 16; i++)
			switch (direction) {
				case 'LEFT':
					list[i] != '' ? control(i, Math.floor(i / 4) * 4, -1) : null;
					break;

				case 'RIGHT':
					list[i] != '' ? control(i, Math.floor(i / 4) * 4 + 3, 1) : null;
					break;

				case 'UP':
					list[i] != '' ? control(i, i - Math.floor(i / 4) * 4) : null;
					break;

				case 'DOWN':
					list[i] != '' ? control(i, 12 + i - Math.floor(i / 4) * 4) : null;
					break;

				default:
					break;
			}
	}

	let list = [];
	/* initialization of the page */
	for (let i = 0; i < 16; i++) list.push('');
	let random = getRandomInt(0, 16);
	list[random] = '2';
	list[random + 2] = '2';

	let dir = 'NEUTRAL';

	function handle_move(e) {
		console.log(e.detail);
		motion(e.detail);
		dir = e.detail;
		//$score += 10;
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
