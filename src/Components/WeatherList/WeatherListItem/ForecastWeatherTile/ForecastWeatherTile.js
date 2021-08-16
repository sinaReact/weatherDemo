import moment from "moment";

import styles from "./ForecastWeatherTile.module.scss";

const ForecastWeatherTile = (props) => {
  //// props
  const { dailyWeatherData } = props;

  /// return
  return (
    <div className={styles.forecastContaienr}>
      {dailyWeatherData.map((day) => (
        <div className={styles.futureDay} key={day.dt}>
          <div>{moment(new Date(day.dt * 1000)).format("MMM Do")}</div>
          <img
            className={styles.forecastIcon}
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div className={styles.dayAndNightTemp}>
            <p className={styles.dayTemp}>{Math.round(day.temp.day)}C'</p>
            <p className={styles.temp}>{Math.round(day.temp.night)}C'</p>
          </div>
        </div>   
      ))}
    </div>
  );
};

export default ForecastWeatherTile;
