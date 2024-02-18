<script>
	import { OPENAI_API_KEY } from "$env/static/private";

    // Ideally, your API key should not be hard-coded but imported from an environment variable or a secure location
    const apiKey = 'OPENAI_API_KEY';

    // Function to make an API request to OpenAI
    /**
	 * @param {any} prompt
	 */
     export async function queryOpenAI(prompt) {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-0125", // Specify the model you want to use
                prompt: prompt, // Your prompt
                max_tokens: 100, // Maximum number of tokens to generate in the completion
                temperature: 0.5, // Controls randomness. Lower is less random.
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].text.trim();
    }
</script>
