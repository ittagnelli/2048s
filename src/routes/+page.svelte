<script>
	import Griglia from '../lib/components/griglia.svelte';
</script>

<div>
	<Griglia />
</div>

<style>
	:global(:root) {
		--bg-color: grey;
		--n-color: rgb(195, 195, 195);
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
</style>
