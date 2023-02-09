import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Heading from "@components/Heading";
import Form from "@components/Form";
import Spinner from "@components/Spinner";
import AiResponse from "@components/AiResponse";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/answer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    const data = await response.json();
    setAnswer(data.text.trim());
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Head>
        <title>OpenAI</title>
        <meta name="description" content="OpenAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Heading title="What is your question?" />
        <Form handleSubmit={handleSubmit} setPrompt={setPrompt} />
      </div>
      {isLoading && <Spinner />}
      {!isLoading && answer !== "" && <AiResponse answer={answer} />}
    </div>
  );
}
