import styles from "./CurrentWeatherTile.module.scss";

const CurrentWeatherTile = (props) => {
  //// props
  const { currentWeatherData, locationName } = props;
  /// return
  return (
    <div className={styles.currentContainer}>
      <div className={styles.tempAndIcon}>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p className={styles.temp}>{Math.round(currentWeatherData.temp)}C'</p>
      </div>
      <div className={styles.name}>{locationName}</div>
    </div>
  );
};

export default CurrentWeatherTile;
