<script>
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
	}

	function motion(direction) {
		console.log(direction);
		for (let i = 0; i < 16; i++) {
			switch (direction) {
				case 'left':
					left(i);
					break;

				case 'right':
					right(i);
					break;

				case 'up':
					up(i);
					break;

				case 'down':
					down(i);
					break;

				default:
					break;
			}
		}
	}

	function left(i) {
		if (list[i] != '') {
			list[Math.floor(i / 4) * 4] = list[i];
			Math.floor(i / 4) * 4 != i ? (list[i] = '') : null;
		}
	}

	function right(i) {
		if (list[i] != '') {
			list[Math.floor(i / 4) * 4 + 3] = list[i];
			Math.floor(i / 4) * 4 + 3 != i ? (list[i] = '') : null;
		}
	}

	function up(i) {
		if (list[i] != '') {
			list[i - Math.floor(i / 4) * 4] = list[i];
			i - Math.floor(i / 4) * 4 != i ? (list[i] = '') : null;
		}
	}

	function down(i) {
		if (list[i] != '') {
			list[12 + i - Math.floor(i / 4) * 4] = list[i];
			12 + i - Math.floor(i / 4) * 4 != i ? (list[i] = '') : null;
		}
	}

	let list = [];
	/* let dir = 'NEUTRAL'; */

	/* initialization of the page */
	for (let i = 0; i < 16; i++) list.push('');
	list[getRandomInt(0, 16)] = '2';
</script>

<div class="griglia">
	{#each list as l}
		<div class="casella" style="background-color: var(--n{l}-color);">{l}</div>
	{/each}
</div>

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
