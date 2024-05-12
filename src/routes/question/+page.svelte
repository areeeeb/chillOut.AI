<script lang="ts">
    import { slide, fade } from "svelte/transition";
    import { userFeelingsStore } from "$lib/stores/userFeelingsStore";
    import { goto } from '$app/navigation';
    import { enhance } from '$app/forms';
    import Groq from 'groq-sdk';


    const feelingTypeText = {
        highEnergyUnpleasant: "High Energy Unpleasant",
        highEnergyPleasant: "High Energy Pleasant",
        lowEnergyUnpleasant: "Low Energy Unpleasant",
        lowEnergyPleasant: "Low Energy Pleasant",
    };

    async function handleSubmit() {
        console.log('submitting');
        
        const groq = new Groq({
            apiKey: '',
            dangerouslyAllowBrowser: true
        });

        const response = await groq.chat.completions.create({
            model: 'gpt-4-turbo',
            messages: [
                {
                    role: 'system',
                    content:
                        'You are an expert in reading the emotional state of the user based on their energy levels and what’s causing them. Your task is to provide 6 potential feelings that user could be going through.\n\nOnly output in JSON as an array. Do not output any other text or symbols.\n\n[\n    "feeling 1",\n    "feeling 2",\n]'
                },
                {
                    role: 'user',
                    content:
                        `{\n    "energy_level": "${feelingTypeText[$userFeelingsStore.feelingType!]}",\n    "cause": "${$userFeelingsStore.reason}"\n}`
                }
            ],
            temperature: 1,
            max_tokens: 4095,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        console.log('got response');
        console.log(response.choices[0].message.content);
        const potentialFeelings = JSON.parse(response.choices[0].message.content!);
        userFeelingsStore.setPotentialFeelings(potentialFeelings);
        goto('/feelingTypeDetailed');
    }
</script>

<div class="container h-full mx-auto flex justify-center items-center px-8" transition:fade>
	<div class="space-y-10 text-center flex flex-col items-center justify-center h-full">
		<div class="text-center">
		  <h1 class="text-3xl font-bold mb-2">Why are you feeling {feelingTypeText[$userFeelingsStore.feelingType]} today?</h1>
		</div>
	<div class="flex flex-col items-center w-full">
        <form 
            on:submit={handleSubmit}
        >
            <input type="hidden" name="feelingType" bind:value={$userFeelingsStore.feelingType}>
            <!-- svelte-ignore a11y-autofocus -->
            <input type="text" name="reason" class="bg-transparent border-none border-b border-gray-300 focus:border-blue-500 focus:outline-none w-full py-2 mb-2" bind:value={$userFeelingsStore.reason} placeholder="Type your thoughts here..." autofocus>
            <button class="btn bg-blue-500 hover:bg-blue-7000 text-white font-bold py-2 px-4 rounded" type="submit">Next</button>
        </form>
	</div>
	</div>
</div>