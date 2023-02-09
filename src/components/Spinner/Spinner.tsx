import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <img width="100px" src="/images/thinking.jpg" />
    </div>
  );
};

export default Spinner;
