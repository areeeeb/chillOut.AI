<script lang="ts">
    export let data;

    console.log(data.task);
</script>

<div class="p-4">
    <h2 class="h2 font-bold">{data.task.charAt(0).toUpperCase() + data.task.slice(1)}</h2>
    <h4 class="h4 text-gray-500 mt-4 font-semibold">Action Items</h4>
    <div class="card bg-white mt-4">
        <header class="card-header">
            <h3 class="h3 font-bold p-4">Item 1</h3>
        </header>
        <section class="p-4">
            <p>Item description goes here</p>
        </section>
    </div>
    <div class="card bg-white mt-4">
        <header class="card-header">
            <h3 class="h3 font-bold p-4">Item 1</h3>
        </header>
        <section class="p-4">
            <p>Item description goes here</p>
        </section>
    </div>
    <div class="card bg-white mt-4">
        <header class="card-header">
            <h3 class="h3 font-bold p-4">Item 1</h3>
        </header>
        <section class="p-4">
            <p>Item description goes here</p>
        </section>
    </div>
    <div class="card bg-white mt-4">
        <header class="card-header">
            <h3 class="h3 font-bold p-4">Item 1</h3>
        </header>
        <section class="p-4">
            <p>Item description goes here</p>
        </section>
    </div>
    <div class="card bg-white mt-4">
        <header class="card-header">
            <h3 class="h3 font-bold p-4">Item 1</h3>
        </header>
        <section class="p-4">
            <p>Item description goes here</p>
        </section>
    </div>
    
</div>

