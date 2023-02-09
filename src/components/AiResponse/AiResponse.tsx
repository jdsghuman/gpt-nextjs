import React from "react";
import classNames from "classnames/bind";

import styles from "./AiResponse.module.scss";
const cx = classNames.bind(styles);

interface Props {
  answer: any;
  isImage?: boolean;
  isError?: boolean;
}
const AiResponse = ({ answer, isImage, isError }: Props) => {
  if (isImage) {
    return (
      <div className={styles.container}>
        <img src={answer} className={styles.image} />
      </div>
    );
  }
  return (
    <div
      className={cx("container", {
        container__error: isError,
      })}
    >
      {answer}
    </div>
  );
};

export default AiResponse;
