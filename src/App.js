import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./App.module.scss";
import { setGotcha } from "./store/UISlice";
import useWindowDimensions from "./hooks/useWindowDimensions";
import Gotcha from "./Components/Gotcha/Gotcha";
import Header from "./Components/Header/Header";
import WeatherList from "./Components/WeatherList/WeatherList";

const App = () => {
  /// hooks
  const gotcha = useSelector((state) => state.UISlice.modal.gotcha);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1024) {
      dispatch(setGotcha(true));
    }
  }, [width]);

  
  // return
  return (
    <div className={styles.appContainer}>
      {gotcha && <Gotcha />}
      <Header />
      <WeatherList />
    </div>
  );
};

export default App;


