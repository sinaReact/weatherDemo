import styles from "./SearchWeatherButton.module.scss";
import sun from "../../../assets/images/sunButton.png";

const SearchWeatherButton = () => {
  /// return
  return <button className={styles.button} ><img className={styles.image} src={sun} alt="Sun" type="submit" /></button>
};

export default SearchWeatherButton;
