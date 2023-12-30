<script>
    import {score} from "../js/store";
    
    export let name;
    export let adj;
</script>

<div class="point {adj ? "adj" : ""}">{name} <div style="display: block; color: white; font-size: 3vh;">{$score}</div></div>



<style>
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
</style>