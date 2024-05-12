<script lang="ts">
	import { userFeelingsStore } from "$lib/stores/userFeelingsStore";
    import { calendarEventsStore } from "$lib/stores/calendarEventsStore";
    import { fade } from "svelte/transition";
	import { goto } from "$app/navigation";
    import OpenAI from 'openai';

    const feelingTypeText = {
        highEnergyUnpleasant: "High Energy Unpleasant",
        highEnergyPleasant: "High Energy Pleasant",
        lowEnergyUnpleasant: "Low Energy Unpleasant",
        lowEnergyPleasant: "Low Energy Pleasant",
    };

    // async function updateFeelingAndSubmit(feeling: string) {
    //     userFeelingsStore.setFeelingTypeDetailed(feeling);
    //     await tick(); // Wait for the store to update

    //     // Dispatch a submit event manually
    //     const event = new Event('submit', {
    //         bubbles: true, // Allow the event to bubble up through the DOM
    //         cancelable: true // Allow the event to be cancellable
    //     });
    //     form.dispatchEvent(event);
    // }

    async function submitFeeling() {
        console.log('submitting');
        console.log(`{\n  \"energy_level\": \"${feelingTypeText[$userFeelingsStore.feelingType!]}\",\n   \"cause\": \"${$userFeelingsStore.reason}\",\n  \"feeling\": \"${$userFeelingsStore.potentialFeelings}\",\n  \"calendar\": ${JSON.stringify($calendarEventsStore)}\n}`);
        
        const openai = new OpenAI({
            apiKey: '',
            dangerouslyAllowBrowser: true
        });

        const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
            {
            "role": "system",
            "content": "You are an expert executive coach that specializes in creating the schedule for the day. You create the schedule based on the mental state of the person. Your priority is to help user keep the momentum on all their tasks and not let them burn out. You are gonna suggest that the person postpone tasks only if it is very necessary for their mental health. You are gonna pick and arrange the tasks to do in the priority based on the person's mental state, for example prioritizing small tasks to build momentum for the day if the person is feeling low.\n\nEvery task has to be accounted for. \n\nYou will also create a general theme for the day based on those factors, which is simple and contains 1-2 sentences. \n\n You are only allowed to add one task by yourself, do not change or alter the tasks.\n\nOutput in JSON format and do not output any other text or symbols.\n\nExample output:\n\n{\n    \"themeForTheDay\": \"This is a theme for the day where you provide empathetic or energizing couple of sentences to help set the tone for the day.\"\n    \"tasks_to_do\": [\n        \"task with priority 1\",\n        \"task with priority 2\",\n        \"task with priority 3\",\n        \"task with priority x\"\n    ],\n    \"tasks_to_postpone\": [\n        \"this contains tasks that are suggested to be postponed to next day.\",\n        \"this could be an empty array too.\"\n    ]\n}"
            },
            {
            "role": "user",
            "content": `{\n  \"energy_level\": \"${$userFeelingsStore.feelingType}\",\n   \"cause\": \"${$userFeelingsStore.reason}\",\n  \"feeling\": \"${$userFeelingsStore.potentialFeelings}\",\n  \"calendar\": ${$calendarEventsStore}\n}`
            }
        ],
        temperature: 1,
        max_tokens: 4095,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        });

        console.log('got response');
        console.log(response.choices[0].message.content);

        const apiResponse = JSON.parse(response.choices[0].message.content!);
        console.log(apiResponse);
        
        userFeelingsStore.setThemeForTheDay(apiResponse.themeForTheDay);
        userFeelingsStore.setTasksToDo(apiResponse.tasks_to_do);
        userFeelingsStore.setTasksToPostpone(apiResponse.tasks_to_postpone);

        goto('/calendar');
    }
</script>


<div class="container h-full mx-auto flex justify-center items-center px-8" transition:fade>
	<div class="space-y-10 text-center flex flex-col items-center justify-center h-full">
		<div class="text-center">
		  <h1 class="text-3xl font-bold mb-2">How would you describe your feelings?</h1>
		</div>
        {#each $userFeelingsStore.potentialFeelings || [] as feeling}
            <button 
                type="button" 
                class="btn variant-filled rounded-md w-full"
                on:click={() => {
                    userFeelingsStore.setFeelingTypeDetailed(feeling);
                    submitFeeling();
                }}
            >
                {feeling}
            </button>
        {/each}
        <!-- <button 
            type="button" 
            class="btn variant-filled rounded-md w-full"
            on:click={() => {
                updateFeelingAndSubmit('feeling1');
            }}
        >
            Feeling 1
        </button> -->
	</div>
</div>