<!--C:\Users\NEWOWNER\OneDrive\Desktop\ruizTechServices\24hourgpt\svelte-24hourgpt\src\lib\components\mistralFrontend.svelte-->
<script lang="ts">
	import { writable } from 'svelte/store';

	const chatResponse = writable<string>('');
	let userInput: string = '';

	interface ApiResponse {
		streamText: string; // Adjusted type
	}

	async function sendQuery(): Promise<void> {
		chatResponse.set('Loading...');

		const response = await fetch('/api/mistralAI', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: userInput })
		});

		if (response.ok) {
			const data: ApiResponse = await response.json();
			chatResponse.set(data.streamText);
		} else {
			chatResponse.set('Failed to fetch data. Please try again.');
		}
	}
</script>

<div class="flex flex-col items-center justify-center p-4">
	<input
		type="text"
		bind:value={userInput}
		placeholder="Ask MistralAI a question..."
		class="input input-bordered input-primary w-full max-w-xs"
		on:keyup={(event) => event.key === 'Enter' && sendQuery()}
	/>
	<button class="btn btn-primary mt-2" on:click={sendQuery}>Send</button>
	<div class="response mt-4">
		<p class="text-lg text-gray-700">Response:</p>
		<p class="text-sm text-gray-600 m-5">{$chatResponse}</p>
	</div>
</div>
