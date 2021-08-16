import { useDispatch } from "react-redux";

import styles from "./WeatherListItem.module.scss";
import CurrentWeatherTile from "./CurrentWeatherTile/CurrentWeatherTile";
import ForecastWeatherTile from "./ForecastWeatherTile/ForecastWeatherTile";
import removeCloud from "../../../assets/images/removeCloud.png";
import { removeLocation } from "../../../store/weatherSlice";

const WeatherListItem = (props) => {
  //// props
  const {
    data: { currentWeatherData, dailyWeatherData, locationName },
  } = props;

  /// hooks
  const dispatch = useDispatch();

  /// helpers
  const removeLocationHandler = () => {
    console.log(222, locationName);
    dispatch(removeLocation(locationName));
  };

  /// return
  return (
    <div className={styles.itemContainer}>
      <div className={styles.removeCloudContainer}>
        <img
          className={styles.removeCloud}
          src={removeCloud}
          onClick={removeLocationHandler}
          alt="remove location icon"
        />
      </div>
      <CurrentWeatherTile
        currentWeatherData={currentWeatherData}
        locationName={locationName}
      />
      <ForecastWeatherTile dailyWeatherData={dailyWeatherData} />
    </div>
  );
};

export default WeatherListItem;
