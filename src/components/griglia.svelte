<script>
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14 ,15]
</script>

<div class="griglia">
    {#each list as l}
        <div class="casella">{l}</div>
    {/each}
</div>

<style>
    .griglia{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        height: 700px;
        width: 700px;
        margin: auto;
        padding: 10px;
        background-color: var(--bg-color);
        border-radius: 20px;
    }
    .casella{
        height: 150px;
        width: 150px;
        background-color: var(--cs-color);
        margin: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>