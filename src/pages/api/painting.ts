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
    const response = await openai.createImage({
      prompt: `A wet on wet oil painting of ${req.body.prompt}.`,
      n: 1,
      size: "512x512",
    });
    res.status(200).json({ text: response.data.data[0].url });
  } else {
    res.status(200).json({ text: "Sorry, your request is invalid" });
  }
}
