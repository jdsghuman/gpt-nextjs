import React, { SetStateAction, useState } from "react";
import Button from "@components/Button";
import styles from "./Form.module.scss";

interface Props {
  handleSubmit: any;
  setPrompt: React.Dispatch<SetStateAction<string>>;
}

const Form = ({ handleSubmit, setPrompt }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        type="text"
        onChange={handleChange}
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
