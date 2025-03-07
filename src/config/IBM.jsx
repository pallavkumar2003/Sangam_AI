import { HfInference } from "@huggingface/inference";

const client = new HfInference("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");

async function chatCompletion_ibm(prompt) {
    try {
const chatCompletion = await client.chatCompletion({
    model: "deepseek-ai/DeepSeek-R1",
    messages: [
        {
            role: "user",
            content: prompt
        }
    ],
    provider: "together",
    max_tokens: 500
});
return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    return "Error fetching response.";
  }
}

export default chatCompletion_ibm;
