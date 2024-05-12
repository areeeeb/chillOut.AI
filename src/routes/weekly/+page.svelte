<script lang="ts">
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Groq from 'groq-sdk';
    import { calendarEventsStore } from '$lib/stores/calendarEventsStore';


    $: categories = [] as string[];

    async function callOpenAI() {
        console.log('calling llm');
        const groq = new Groq({
            apiKey: '',
            dangerouslyAllowBrowser: true
        });

        const response = await groq.chat.completions.create({
        model: "gpt-4-turbo",
        messages: [
                {
                "role": "system",
                "content": "Your job is to categories the given calendar tasks. Make sure that the categories are either one of Fund raising, product development, GTM, Hiring and team building, Financial management or create a new one if it doesn't fall into these but prioritize these given categories first. Also have an emoji in the beginning of category. Only output in the below JSON format. Do not output anything else but JSON.\n\n[\n    {\n        \"eventId\": \"eventX\",\n        \"category: \"categoryX\"\n    },\n    {\n        \"eventId\": \"eventXX\",\n        \"category: \"categoryXX\"\n    }\n]"
                },
                {
                "role": "user",
                "content": `{\n  \"calendar\": ${JSON.stringify($calendarEventsStore)}\n}`
                }
            ],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        console.log('got response');
        console.log(JSON.parse(response.choices[0].message.content!));

        const apiResponse = JSON.parse(response.choices[0].message.content!);

        // get the unique apiResponse.category values and store them in categories
        apiResponse.forEach((event: { category: string }) => {
            if (!categories.includes(event.category)) {
                categories.push(event.category);
            }
        });

        console.log(categories);
        
    }

    onMount(() => {
        // call an API to get the data
        callOpenAI();
    });
</script>

<div class="p-4">
    <h2 class="h2 font-bold">Weekly View</h2>
    <h4 class="h4 text-gray-500 mt-4 font-semibold">Segments for this week</h4>
    {#each categories as category}
        <button on:click={() => goto(`/weekly/${category}`)} class="btn variant-filled rounded-md w-full mt-4 justify-start font-semibold">{category}</button>
    {/each}
    <button on:click={() => goto(`/weekly/fundraising`)} class="btn variant-filled rounded-md w-full mt-4 justify-start font-semibold">Fundraising</button>
    <button class="btn variant-filled-primary rounded-md w-full mt-4 justify-start font-semibold">Product Development</button>
    <button class="btn variant-filled-secondary rounded-md w-full mt-4 justify-start font-semibold">GTM</button>
    <button class="btn variant-filled-success rounded-md w-full mt-4 justify-start font-semibold">Hiring and team building</button>
    <button class="btn variant-filled-warning rounded-md w-full mt-4 justify-start font-semibold">Sales</button>
    <!-- <h4 class="h4 text-gray-500 mt-4 font-semibold">Missed Items</h4>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Fundraising</button>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Product Development</button>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">GTM</button>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Hiring and team building</button>
    <button class="btn variant-ghost-surface rounded-md w-full mt-4 justify-start font-semibold">Sales</button> -->
</div>

