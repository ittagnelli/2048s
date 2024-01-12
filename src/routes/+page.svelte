<script>
	import GameController from '../lib/components/game_controller.svelte';
	import GameBoard from '../lib/components/game_board.svelte';
    import Landscape from '../lib/components/landscape.svelte';
	import GameOver from '../lib/components/game_over.svelte';
  </script>

<!-- the game can be only played in portrait mode -->
<Landscape />

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
		--main-text-color: #776e65;
		--button-bg: #8f7a66;
		--button-fg: #f9f6f2;
		--cell-bg: #bbada0;
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
    
    @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
        .game-container {
            display: none;
        }
    }
</style>
