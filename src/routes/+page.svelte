<script> 

    import Griglia from "..//components/griglia.svelte";

    let score = 0;
    let record = 0;

    $: {
        if(score > record) {
            record = score;
        }
    }

    function restart() {
        score = 0;
    }
</script>

<div class="container">
    <div class="sub-container">
        <div class="name">2048</div> 
        <div class="point">RECORD <div style="display: block; color: white; font-size: 3vh;">{record}</div></div>
    </div>

    <hr>

    <div class="sub-container">
        <div style="margin-top: 4vh;">Join the numbers and get to the <b>2048 tile!</b></div>
        <div class="point adj">SCORE <div style="display: block; color: white; font-size: 3vh;">{score}</div></div>
    </div>

    <div class="table">
        <Griglia/>
    </div>

    <div class="New_Game" on:click={restart}>New Game</div>
</div>

<style>

:global(:root){
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

    hr {
        height: 1vh;
        background-color: peru;
        border: 1px double black;
    }

    .container {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        height: min-content;
        border: 1px solid red;
    }

    .point  {
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

    .adj {
        margin-top: 1.5vh;
    }

    .name {
        font-size: 10vh;
        font-weight: bolder;
    }

    .sub-container  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px solid red;
    }

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

    .table {
        margin-top: 5vh;
    }

</style>