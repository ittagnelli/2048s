<script>
    import Score from "../components/score.svelte";
</script>

<div class="sub-container">
    <div class="name">2048</div> 
    <Score name="RECORD"/>
</div>

<hr>

<div class="sub-container">
    <div style="margin-top: 4vh;">Join the numbers and get to the <b>2048 tile!</b></div>
    <Score name="SCORE" adj=1/>
</div>

<style>
    .name {
        font-size: 10vh;
        font-weight: bolder;
    }

    .sub-container  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px solid red;
    }

    hr {
        height: 1vh;
        background-color: peru;
        border: 1px double black;
    }
</style>