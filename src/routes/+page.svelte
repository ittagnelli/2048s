<script>
	import Input from '../lib/components/input.svelte';

	let dir = 'NEUTRAL';
	function handle_move(e) {
		console.log(e.detail);
		dir = e.detail;
	}
</script>

<Input on:move={handle_move} />

{dir}
