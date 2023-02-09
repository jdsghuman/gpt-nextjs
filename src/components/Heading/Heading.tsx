import styles from "./Heading.module.scss";

interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <div className={styles.title}>
      <h2 className={styles.title__text}>{title}</h2>
    </div>
  );
};

export default Heading;
