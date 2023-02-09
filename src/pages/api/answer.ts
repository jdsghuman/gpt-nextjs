import { NextApiRequest, NextApiResponse } from "next";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body.prompt === "") {
    res.status(200).json({ text: "Please enter valid text" });
  }
  if (typeof req.body.prompt === "string") {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      temperature: 0,
      max_tokens: 1000,
    });
    console.log("response----", response);
    res.status(200).json({ text: response.data.choices[0].text });
  } else {
    res.status(200).json({ text: "Sorry, your request is invalid" });
  }
}
