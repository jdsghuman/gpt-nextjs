import React, { useState } from "react";
import Form from "@components/Form";
import Heading from "@components/Heading";
import Head from "next/head";
import Spinner from "@components/Spinner";
import AiResponse from "@components/AiResponse";

const Art = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/painting", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setAnswer(data.text);
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
        <Heading title="What kind of painting would you like?" />
        <Form setPrompt={setPrompt} handleSubmit={handleSubmit} />
      </div>
      {/* {isLoading === false && answer !== "" && <img src={answer} />} */}
      {isLoading && <Spinner />}
      {!isLoading && answer !== "" && <AiResponse isImage answer={answer} />}
    </div>
  );
};

export default Art;
