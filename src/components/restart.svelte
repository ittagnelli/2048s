<script>
    import {score} from "../js/store";

    function restart() {
        $score = 0;
    }
</script>


<div class="New_Game" on:click={restart}>New Game</div>


<style>
        .New_Game {
        padding-top: 1vh;
        padding-bottom: 1vh;
        width: 10vw;
        height: min-content;
        background-color: peru;
        border-radius: 1vh;
        margin: 0 auto;
        margin-top: 2.5vh;
        font-size: larger;
        font-weight: 400;
    }
</style>