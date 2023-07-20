const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Function to check if the OpenAI API key is valid
async function isAPIKeyValid() {
  try {
    // Call the OpenAI API with a test request to check if the key is valid
    await openai.createCompletion({
      engine: "davinci", // Use any engine, this is just for testing the key
      prompt: "This is a test.",
      maxTokens: 1,
    });
    return true; // API key is valid
  } catch (error) {
    return false; // API key is not valid
  }
}

exports.chat = async (req, res) => {
  const userMessage = req.body.message; // Assuming the user's message is sent in the request body

  try {
    // Check if the OpenAI API key is valid before proceeding with the chat request
    const isValidAPIKey = await isAPIKeyValid();
    if (!isValidAPIKey) {
      return res.status(401).json({ error: "Invalid API key." });
    }

    // Call the GPT-3.5 API to generate a response based on user input
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    });

    // Extract the response from the API result
    const chatGptResponse = chatCompletion.data.choices[0].message.content;

    // Send the response back to the client
    res.json({ response: chatGptResponse });
  } catch (error) {
    console.error("Error during chat:", error);
    res.status(500).json({ error: "An error occurred during the chat." });
  }
};
