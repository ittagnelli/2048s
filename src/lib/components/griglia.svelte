<script>
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
	}

	/* function control_left(initial_index, final_index) {
		console.log(initial_index, final_index);

		for (let i = initial_index - 1; i >= final_index; i--) {
			if (list[i] !== list[initial_index] && list[i] !== '') break;
			list[i] === list[initial_index] ? join(i, initial_index) : null;
		}

		console.log(list);
		//move(initial_index, final_index);
	} */

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
				case 'left':
					list[i] != '' ? control(i, Math.floor(i / 4) * 4, -1) : null;
					break;

				case 'right':
					list[i] != '' ? control(i, Math.floor(i / 4) * 4 + 3, 1) : null;
					break;

				case 'up':
					list[i] != '' ? control(i, i - Math.floor(i / 4) * 4) : null;
					break;

				case 'down':
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
</script>

<div class="griglia">
	{#each list as l}
		<div class="casella" style="background-color: var(--n{l}-color);">{l}</div>
	{/each}
</div>

<!-- temporary button to create the movement -->
<input type="button" value="left" on:click={() => motion('left')} />
<input type="button" value="right" on:click={() => motion('right')} />
<input type="button" value="up" on:click={() => motion('up')} />
<input type="button" value="down" on:click={() => motion('down')} />

<style>
	.griglia {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		height: 700px;
		width: 700px;
		margin: auto;
		padding: 10px;
		background-color: var(--bg-color);
		border-radius: 20px;
	}
	.casella {
		height: 150px;
		width: 150px;
		/* background-color: var(--n-color); */
		margin: 10px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
