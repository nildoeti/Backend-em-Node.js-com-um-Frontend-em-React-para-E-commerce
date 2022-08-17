import ReactLoading from "react-loading";
import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.content}>
      <ReactLoading type={"spin"} color={"#333"} width={50} height={50} />
    </div>
  );
};

export default Loading;
