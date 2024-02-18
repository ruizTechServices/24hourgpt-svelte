<script>
	import { useChat } from 'ai/svelte';

	const { input, handleSubmit, messages } = useChat();
</script>

<main class="">
	<ul>
		{#each $messages as message}
			<li>{message.role}: {message.content}</li>
		{/each}
	</ul>
	<form on:submit={handleSubmit}>
		<input bind:value={$input} />
		<button type="submit">Send</button>
	</form>
</main>
