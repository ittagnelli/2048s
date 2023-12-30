<script>
	import Input from '../lib/components/input.svelte';
	import Griglia from '../components/griglia.svelte';
	import Restart from '../components/restart.svelte';
	import Title from '../components/title.svelte';
	import { score } from '../js/store';

	let dir = 'NEUTRAL';
	let record = 0;

	$: {
		if ($score > record) {
			record = $score;
		}
	}

	function handle_move(e) {
		console.log(e.detail);
		dir = e.detail;
	}
</script>

<Input on:move={handle_move} />

{dir}

<div class="container">
	<Title />

	<div class="table">
		<Griglia />
	</div>

	<Restart />
</div>

<style>
	:global(:root) {
		--bg-color: peru;
		--cs-color: lightgrey;
		--n2-color: white;
		--n4-color: beige;
		--n8-color: yellow;
		--n16-color: orange;
		--n32-color: red;
		--n64-color: violet;
		--n128-color: purple;
		--n256-color: lightblue;
		--n512-color: blue;
		--n1024-color: lightgreen;
		--n2048-color: green;
	}

	.container {
		width: 50%;
		margin: 0 auto;
		text-align: center;
		height: min-content;
		border: 1px solid red;
	}

	.table {
		margin-top: 5vh;
	}
</style>
