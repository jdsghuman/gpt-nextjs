import React from "react";
import styles from "./AiResponse.module.scss";

interface Props {
  answer: any;
  isImage?: boolean;
}
const AiResponse = ({ answer, isImage }: Props) => {
  if (isImage) {
    return (
      <div className={styles.container}>
        <img src={answer} className={styles.image} />
      </div>
    );
  }
  return <div className={styles.container}>{answer}</div>;
};

export default AiResponse;
