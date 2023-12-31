<script>
	import Input from './input.svelte';
	import { score } from '../js/store';

	function radom_new_cell() {
		let l = [];
		for (let i = 0; i < 16; i++)
			list[i] === '' ? l.push(i) : null;
		return l[Math.floor((Math.random() * l.length))];
	}

	function getRandomInt(min, max) {
		/* random number in a range >= n && < m */
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
	}

	function move(i, final_index, increment) {
		/* general function to move cells using initial index and final index of the cell */
		increment *= -1;
		while (list[final_index] !== '' && list[final_index] !== list[i]) final_index += increment;
		list[final_index] = list[i];
		final_index !== i ? (list[i] = '') : null;
	}

	function join(a, b) {
		/* make the join beetwen 2 identical numbers */
		list[b] = String(list[a] * 2);
		list[a] = '';
		$score += Number(list[b]);
	}

	function check_possible_join(initial_index, final_index, increment) {
		/* control if there are/are not possible join beetwen identical numbers */
		for (let i = initial_index + increment; i !== final_index + increment; i += increment) {
			if (list[i] !== list[initial_index] && list[i] !== '') break;
			(list[i] === list[initial_index]) ? join(i, initial_index) : null;
		}
		move(initial_index, final_index, increment);
	}

	function motion(direction) {
		/* selector of the type of movement, it deal with the event created by component input */
		if (direction === 'LEFT' || direction === 'UP')
			for (let i = 0; i < 16; i++)
				direction === 'LEFT'
					? list[i] !== ''
						? check_possible_join(i, Math.floor(i / 4) * 4, -1)
						: null
					: list[i] !== ''
					? check_possible_join(i, i - Math.floor(i / 4) * 4, -4)
					: null;
		else
			for (let i = 15; i >= 0; i--)
				direction === 'RIGHT'
					? list[i] !== ''
						? check_possible_join(i, Math.floor(i / 4) * 4 + 3, 1)
						: null
					: list[i] !== ''
					? check_possible_join(i, 12 + i - Math.floor(i / 4) * 4, 4)
					: null;
	}



	function handle_move(e) {
		/* deal with the event created by input.svelte */
		console.log(e.detail);
		motion(e.detail);
		dir = e.detail;
		setTimeout(() => list[radom_new_cell()] = '2', 750);
	}

	let list = [];
	let dir = 'NEUTRAL';

	/* initialization of the page */
	for (let i = 0; i < 16; i++) list.push('');
	list[radom_new_cell()] = '2';
	list[radom_new_cell()] = '2';
</script>

<div class="griglia">
	{#each list as l}
		<div class="casella" style="background-color: var(--n{l}-color);">{l}</div>
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
		border-radius: 3px;
	}
</style>
