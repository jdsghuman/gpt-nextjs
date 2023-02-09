import React, { useEffect, useState } from "react";
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
  const [isError, setIsError] = useState<boolean>(false);

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
    if (data.text.trim() === "Please enter valid text") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <>
      <Head>
        <title>OpenAI</title>
        <meta name="description" content="OpenAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isLoading && (
        <>
          <Heading title="What is your question?" />
          <Form
            prompt={prompt}
            handleSubmit={handleSubmit}
            setPrompt={setPrompt}
          />
        </>
      )}
      {isLoading && <Spinner />}
      {!isLoading && answer !== "" && (
        <AiResponse isError={isError} answer={answer} />
      )}
    </>
  );
}
