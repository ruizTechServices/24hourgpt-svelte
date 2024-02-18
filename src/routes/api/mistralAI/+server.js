//C:\Users\NEWOWNER\OneDrive\Desktop\ruizTechServices\24hourgpt\svelte-24hourgpt\src\routes\api\mistralAI\+server.js
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || 'E5E4EHQMICGkIxI3cs0f2nE7JHF5WciX'; 
const client = new MistralClient(apiKey);

export async function POST({ request }) {
  try {
    const body = await request.json(); // Read the request body

    const chatStreamResponse = await client.chatStream({
      model: 'mistral-tiny',
      messages: [{ role: 'user', content: body.message }], 
    });

    const streamText = [];
    for await (const chunk of chatStreamResponse) {
      if (chunk.choices[0].delta.content !== undefined) {
        streamText.push(chunk.choices[0].delta.content);
      }
    }

    return new Response(JSON.stringify({ streamText }), { status: 200 }); 
  } catch (error) {
    console.error('Error in Mistral AI interaction:', error);
    return new Response(JSON.stringify({ error: 'Error processing request' }), { status: 500 });
  }
}
