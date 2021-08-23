import { useRef, useEffect, useState } from "react";
import places from "places.js";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchBox.module.scss";
import { getWeatherData } from "../../store/weatherSlice";
import { getWeatherData_error } from "../../store/weatherSlice";
import SearchWeatherButton from "../UI/SearchWeatherButton/SearchWeatherButton";
import LocationNotFoundModal from "../LocationNotFoundModal/LocationNotFoundModal";

const SearchBox = (props) => {
  /// props
  const { className } = props;
  /// hooks
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [location, setLocation] = useState(null);
  const locationNotFound = useSelector(
    (state) => state.weatherSlice.error
  );
  useEffect(() => {
    const autocomplete = places({
      container: inputRef.current,
    });

    autocomplete.on("change", (event) => {
      setValue(event.suggestion.value);
      setLocation(event.suggestion);
    });
  }, []);

  //// helpers
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    if (location) {
      dispatch(getWeatherData(location));
    } else {
      dispatch(getWeatherData_error(true));
    }
    setValue("");
    setLocation(null);
  };

  //// return
  return (
    <>
      {locationNotFound && <LocationNotFoundModal />}
      <form
        className={`${styles.searchBoxContainer} ${className}`}
        onSubmit={searchSubmitHandler}
      >
        <input
          onBlur={() => (inputRef.current.value = "")}
          value={value}
          onChange={onChange}
          className={styles.search}
          ref={inputRef}
          id="address-input"
          placeholder="Where are we going?"
        />
        <SearchWeatherButton />
      </form>
    </>
  );
};

export default SearchBox;
