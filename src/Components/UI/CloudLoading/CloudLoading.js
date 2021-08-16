import styles from "./CloudLoading.module.scss";
import loadingCloud from '../../../assets/gifs/cloudLoading.gif';

const Loading = () => {
  /// return
  return <img className={styles.cloudContainer} src={loadingCloud} alt="loading..." />;
};

export default Loading;
