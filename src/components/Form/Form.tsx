import React, { SetStateAction, useRef, useEffect } from "react";
import Button from "@components/Button";
import styles from "./Form.module.scss";

interface Props {
  handleSubmit: any;
  setPrompt: React.Dispatch<SetStateAction<string>>;
}

const Form = ({ handleSubmit, setPrompt }: Props) => {
  const inputTxt = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  useEffect(() => {
    if (inputTxt.current) {
      inputTxt.current.focus();
    }
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        ref={inputTxt}
        type="text"
        onChange={handleChange}
        placeholder={"Enter text here"}
      />
      <div>
        <Button onClick={handleSubmit} className={styles.button}>
          Go!
        </Button>
      </div>
    </form>
  );
};

export default Form;
