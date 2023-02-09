import React, { SetStateAction, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@components/Button";
import styles from "./Form.module.scss";

interface Props {
  handleSubmit: any;
  setPrompt: React.Dispatch<SetStateAction<string>>;
  prompt: string;
}

const Form = ({ handleSubmit, setPrompt, prompt }: Props) => {
  const inputTxt = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const clearInput = () => setPrompt("");

  useEffect(() => {
    if (inputTxt.current) {
      inputTxt.current.focus();
    }
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.input}
          ref={inputTxt}
          type="text"
          onChange={handleChange}
          placeholder={"Enter text here"}
          value={prompt}
        />
        {prompt !== "" && (
          <IoCloseOutline onClick={clearInput} className={styles.icon} />
        )}
      </div>
      <div>
        <Button onClick={handleSubmit} className={styles.button}>
          Go!
        </Button>
      </div>
    </form>
  );
};

export default Form;
