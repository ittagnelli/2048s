<script> 

    import Griglia from "../components/griglia.svelte";
    import Score from "../components/score.svelte";
    import Restart from "../components/restart.svelte";

    import {score} from "../js/store";

    
    let record = 0;

    $: {
        if($score > record) {
            record = $score;
        }
    }

</script>

<div class="container">
    <div class="sub-container">
        <div class="name">2048</div> 
        <Score name="RECORD"/>
    </div>

    <hr>

    <div class="sub-container">
        <div style="margin-top: 4vh;">Join the numbers and get to the <b>2048 tile!</b></div>
        <Score name="SCORE" adj=1/>
    </div>
    <div class="table">
        <Griglia/>
    </div>

    <Restart/>
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

    .name {
        font-size: 10vh;
        font-weight: bolder;
    }

    .sub-container  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px solid red;
    }

    .table {
        margin-top: 5vh;
    }

</style>