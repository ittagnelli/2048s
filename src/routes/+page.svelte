<script>
	import GameController from '../lib/components/game_controller.svelte';
	import GameBoard from '../lib/components/game_board.svelte';
</script>

<div class="game-container">
	<div class="game-controller">
		<GameController />
	</div>
	<div class="game-board">
		<GameBoard />
	</div>
</div>

<style>
	:global(:root) {
		--bg-color: #fafaef;
		--cell-color: rgba(238, 228, 218, 0.35);
		--main-text-color: #776e65;
		--button-bg: #8f7a66;
		--button-fg: #f9f6f2;
		--cell-bg: #bbada0;
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

	:global(body) {
		background-color: var(--bg-color);
	}

	.game-container {
		width: min(95%, 500px);
		margin: 0 auto;
		text-align: center;
		height: min-content;
		margin-top: 20px;
	}
</style>
