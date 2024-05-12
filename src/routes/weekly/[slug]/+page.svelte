<script lang="ts">
    export let data;
    import { goto } from '$app/navigation';

    console.log(data.slug);
</script>

<div class="p-4">
    <h2 class="h2 font-bold">{data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}</h2>
    <h4 class="h4 text-gray-500 mt-4 font-semibold">Tasks</h4>
    <button on:click={() => goto(`/weekly/${data.slug}/Pitch deck creation`)} class="btn variant-filled rounded-md w-full mt-4 justify-start font-semibold">Pitch deck creation</button>
    <button on:click={() => goto(`/weekly/${data.slug}/Investor pitch meeting`)} class="btn variant-filled rounded-md w-full mt-4 justify-start font-semibold">Investor pitch meeting</button>
    <button on:click={() => goto(`/weekly/${data.slug}/Application for the incubator`)} class="btn variant-filled rounded-md w-full mt-4 justify-start font-semibold">Application for the incubator</button>
    <h4 class="h4 text-gray-500 mt-4 font-semibold">Missed Items</h4>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Task 1</button>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Task 2</button>
</div>

