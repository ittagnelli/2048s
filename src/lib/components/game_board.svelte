<script>
	import Input from './input.svelte';
	import { star_game } from '../js/store';

	const EMPTY = 0;
	const NUM_CELLS = 16;
	const CELL_DELAY = 1;
	let matrix = Array(NUM_CELLS).fill(EMPTY);
    let d = 'NONE'

	const get_random = (min, max) => {
		return Math.floor(Math.random() * (1 + max - min) + min);
	};

	const radom_new_cell = () => {
		let l = [];
		matrix.forEach((cell, i) => {
			if (cell === EMPTY) l.push(i);
		});
		return l[Math.floor(Math.random() * l.length)];
	};

	const merge_horizontal = (dir, r) => {
		for (let r = 0; r < 4; r++) {
			let merged_row = merge(dir == 'LEFT' ? get_row(r) : get_row(r).reverse());
			update_row(r, dir == 'LEFT' ? merged_row : merged_row.reverse());
		}
	};

	const merge_vertical = (dir, r) => {
		for (let r = 0; r < 4; r++) {
			let merged_col = merge(dir == 'UP' ? get_col(r) : get_col(r).reverse());
			update_col(r, dir == 'UP' ? merged_col : merged_col.reverse());
		}
	};

	const motion = (direction) => {
		/* selector of the type of movement, it deal with the event created by component input */
        d=direction
		switch (direction) {
			case 'LEFT':
			case 'RIGHT':
				merge_horizontal(direction);
				break;
			case 'UP':
			case 'DOWN':
				merge_vertical(direction);
				break;
			default:
				break;
		}
		matrix = [...matrix];
	};

	const get_next_cell = () => {
		//80% of cell 2 and 20% of cell 4
		return get_random(1, 100) < 80 ? 2 : 4;
	};

	function handle_move(e) {
		/* deal with the event created by input.svelte */
		motion(e.detail);
		setTimeout(() => (matrix[radom_new_cell()] = get_next_cell()), CELL_DELAY);
	}

	const get_row = (r) => {
		return matrix.slice(r * 4, r * 4 + 4);
	};

	const update_row = (r, row) => {
		matrix.splice(r * 4, 4, ...row);
	};

	const get_col = (c) => {
		return matrix.filter((_, i) => (i - c) % 4 == 0);
	};

	const update_col = (r, row) => {
		for (let i = 0; i < 4; i++) matrix.splice(r + i * 4, 1, row[i]);
	};

	const merge = (r) => {
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
			}
		}
		return r;
	};

	star_game.subscribe((v) => {
		// this is a trick as gained points might be the same on different moves
		// this way we can recognize changes in score for every move
		// delta_score = v - current_score;
		// if(delta_score > 0) score_animation(ANIMATION_LEN);
		if ($star_game) {
			console.log('NUOVO GIOCO:', $star_game);
			matrix = matrix.map((cell) => (cell = EMPTY));
			matrix[radom_new_cell()] = 2;
			matrix[radom_new_cell()] = 2;
			$star_game = false;

            // matrix = [0,2,4,8,16,32,64,128,256,512,1024,2048,0,0,0,0]
		}
	});
</script>

<div class="griglia">
	{#each matrix as cell}
		<!-- <div class="casella" style="background-color: var(--n{cell}-color);">{cell == 0 ? '' : cell}</div> -->
		<div class="casella tile-{cell}">{cell == 0 ? '' : cell}</div>
	{/each}
</div>

<br>
{d}

<Input on:move={handle_move} />

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
        display: flex;
        align-items: center;
        justify-content: center;
		aspect-ratio: 1;
		border-radius: 3px;
		font-weight: bold;
		font-size: 55px;
        font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif
	}

	.tile-0 {
		background: #D0C1B4;
	}

	.tile-2 {
        color: #796F65;
		background: #eee4da;
		/* box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0); */
	}
    @media only screen and (max-width: 600px) {
        .tile-2 {
            font-size: 40px;
        }
    }

	.tile-4 {
        color: #897F72;
		background: #ede0c8;
	}
    @media only screen and (max-width: 600px) {
        .tile-4 {
            font-size: 40px;
        }
    }

	.tile-8 {
		color: #f9f6f2;
		background: #f2b179;
	}
    @media only screen and (max-width: 600px) {
        .tile-8 {
            font-size: 40px;
        }
    }

	.tile-16 {
		color: #f9f6f2;
		background: #f59563;
	}
    @media only screen and (max-width: 600px) {
        .tile-16 {
            font-size: 35px;
        }
    }

	.tile-32 {
		color: #f9f6f2;
		background: #f67c5f;
	}
    @media only screen and (max-width: 600px) {
        .tile-32 {
            font-size: 35px;
        }
    }

	.tile-64 {
		color: #f9f6f2;
		background: #f65e3b;
	}
    @media only screen and (max-width: 600px) {
        .tile-64 {
            font-size: 35px;
        }
    }

	.tile-128 {
		color: #f9f6f2;
		background: #edcf72;
		font-size: 45px;
	}
	@media only screen and (max-width: 600px) {
        .tile-128 {
            font-size: 30px;
        }
    }

	.tile-256 {
		color: #f9f6f2;
		background: #edcc61;
		font-size: 45px;
	}
	@media only screen and (max-width: 600px) {
        .tile-256 {
            font-size: 30px;
        }
    }

	.tile-512 {
		color: #f9f6f2;
		background: #edc850;

		font-size: 45px;
	}
	@media only screen and (max-width: 600px) {
        .tile-512 {
            font-size: 30px;
        }
    }

	.tile-1024 {
		color: #f9f6f2;
		background: #edc53f;
		font-size: 40px;
	}
	@media only screen and (max-width: 600px) {
        .tile-1024 {
            font-size: 25px;
        }
    }

	.tile-2048 {
		color: #f9f6f2;
		background: #edc22e;
		font-size: 40px;
	}
	@media only screen and (max-width: 600px) {
        .tile-2048 {
            font-size: 25px;
        }
    }
</style>
