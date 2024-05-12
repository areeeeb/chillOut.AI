
<script lang="ts">
    import { goto } from '$app/navigation';
    import { userFeelingsStore } from '$lib/stores/userFeelingsStore';

    $: showModal = false;
    $: modalDetails = {
        title: '',
        description: '',
    }
</script>

<div class="p-4">
    <h1 class="text-xl font-bold text-center mb-4">Here are your suggested tasks for today</h1>
    <h4 class="h4 text-gray-400 mt-4 text-center mb-4">{$userFeelingsStore.themeForTheDay}</h4>
    <h6 class="h6 text-gray-500 mt-4 font-semibold mb-4">Tasks to Prioritize</h6>
        {#each $userFeelingsStore.tasksToDo || [] as task}
            <div class="flex items-center w-full mt-3">
                <input type="checkbox" class="mr-2">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    on:click={() => {
                        modalDetails.title = task;
                        modalDetails.description = 'The task description goes here';
                        showModal = true;
                    }} 
                    class="card card-hover px-4 py-8 font-semibold w-full rounded-md flex justify-between items-center"
                >
                    {task}
                    <!-- <span class="badge variant-filled-error">URGENT</span> -->
                </div>
            </div>
        {/each}
        {#if $userFeelingsStore.tasksToPostpone && $userFeelingsStore.tasksToPostpone.length > 0}
            <h6 class="h6 text-gray-500 mt-4 font-semibold mb-4">Other Tasks</h6>
            {#each $userFeelingsStore.tasksToPostpone || [] as task}
                <div class="flex items-center w-full mt-3">
                    <input type="checkbox" class="mr-2">
                    <div class="block card card-hover px-4 py-8 font-semibold w-full rounded-md">{task}</div>
                </div>
            {/each}
        {/if}
</div>

{#if showModal}
    <div class="fixed inset-0 bg-opacity-50 flex justify-center items-center px-4">
        <div class="bg-surface-500 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-4">{modalDetails.title}</h2>
            <!-- <p class="">
                Emotional State: Content, Calm, Secure
                Approach: Focus on routine checks and documentation processes that require a steady hand rather than creative energy. This state is ideal for methodical work that benefits from your calm and collected approach.
                Time Management:
                0-45 minutes: Conduct a thorough review of code for standard compliance and minor bugs.
                45-90 minutes: Systematically update documentation to reflect any changes or important clarifications needed.
            </p> -->
            <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => showModal = false}>
                Close
            </button>
            <button class="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" on:click={() => showModal = false}>
                Postpone
            </button>
        </div>
    </div>
{/if}

