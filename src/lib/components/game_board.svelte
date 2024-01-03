<script>
	import Input from './input.svelte';
	import { score } from '../js/store';

	function radom_new_cell() {
		let l = [];
		for (let i = 0; i < 16; i++) list[i] === 0 ? l.push(i) : null;
		return l[Math.floor(Math.random() * l.length)];
	}
	
	/*
	function move(i, final_index, increment) {
		// general function to move cells using initial index and final index of the cell
		increment *= -1;
		while (list[final_index] !== '' && list[final_index] !== list[i]) final_index += increment;
		list[final_index] = list[i];
		final_index !== i ? (list[i] = '') : null;
	}

	function join(a, b) {
		// make the join beetwen 2 identical numbers
		list[b] = String(list[a] * 2);
		list[a] = '';
		$score += Number(list[b]);
	}

	function check_possible_join(initial_index, final_index, increment) {
		// control if there are/are not possible join beetwen identical numbers
		for (let i = initial_index + increment; i !== final_index + increment; i += increment) {
			if (list[i] !== list[initial_index] && list[i] !== '') break;
			list[i] === list[initial_index] ? join(i, initial_index) : null;
		}
		move(initial_index, final_index, increment);
	} */

	function motion(direction) {
		/* selector of the type of movement, it deal with the event created by component input */

		for (let r = 0; r < 4; r++) {
			if (direction === 'LEFT') {
				let merged_row = merge(get_row(r), 0);
				console.log('      FINAL:', merged_row);
				update_row(r, merged_row);
			}

			if (direction === 'RIGHT') {
				let merged_row = merge(get_row(r).reverse(), 0);
				console.log('      FINAL:', merged_row);
				update_row(r, merged_row.reverse());
			}

			if (direction === 'UP') {
				let merged_row = merge(get_col(r), 0);
				console.log('      FINAL:', merged_row);
				update_col(r, merged_row);
				print_matrix()
			}

			if (direction === 'DOWN') {
				let merged_row = merge(get_col(r).reverse(), 0);
				console.log('      FINAL:', merged_row);
				update_col(r, merged_row.reverse());
			}
		}
		list = [...list];
		/* if (direction === 'LEFT' || direction === 'UP')
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
					: null; */
	}

	function handle_move(e) {
		/* deal with the event created by input.svelte */
		console.log(e.detail);
		motion(e.detail);
		dir = e.detail;
		setTimeout(() => (list[radom_new_cell()] = 2), 750);
		list = [...list]
	}

	const get_row = (r) => {
		return list.slice(r * 4, r * 4 + 4);
	};

	const update_row = (r, row) => {
		list.splice(r * 4, 4, ...row);
	};

	const update_col = (r, row) => {
		let cont = 0;
		for (let i = r; i < list.length; i += 4) list[i] = row[cont++];
		//list.splice(r, 4, ...row);
	};

	const get_col = (c) => {
		return list.filter((_, i) => (i - c) % 4 == 0);
	};

	const print_matrix = () => {
		console.log('--------------');
		console.log(get_row(0));
		console.log(get_row(1));
		console.log(get_row(2));
		console.log(get_row(3));
		console.log('--------------');
	};

	const merge = (r) => {
		console.log('     INIZIO:', r);
		// let r = row;
		for (let start = 0; start < 3; start++) {
			let merged = false;
			let max_shift = 3 - start;
			while (max_shift > 0) {
				max_shift--;
				let pivot = r.splice(start + 1, 1)[0];
				if (pivot == r[start] || r[start] == EMPTY || pivot == EMPTY) {
					if (!merged) {
						if (r[start] == pivot && pivot != EMPTY) merged = true;
						r[start] += pivot;
						r.push(EMPTY);
					} else {
						r.splice(start + 1, 0, pivot);
					}
				} else {
					r.splice(start + 1, 0, pivot);
					break;
				}
				console.log(`INTERMEDIO${max_shift}:`, r);
			}
		}
		return r;
	};

	let list = [];
	let dir = 'NEUTRAL';
	const EMPTY = 0;

	/* initialization of the page */
	for (let i = 0; i < 16; i++) list.push(0);
	list[radom_new_cell()] = 2;
	list[radom_new_cell()] = 2;
</script>

<div class="griglia">
	{#each list as l}
		<div class="casella" style="background-color: var(--n{l}-color);">{l == 0 ? '' : l}</div>
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
