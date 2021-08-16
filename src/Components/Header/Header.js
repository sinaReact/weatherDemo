import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.scss";
import { setNeedMore } from "../../store/UISlice";
import SearchBox from "../SearchBox/SearchBox";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NeedHelpMpdal from "../NeedHelpModal/NeedHelpModal";

const Header = () => {
  /// hooks
  const { width } = useWindowDimensions();
  const needMore = useSelector((state) => state.UISlice.modal.needMore);
  const dispatch = useDispatch();
  /// helpers

  const needMoreHandler = () => {
    dispatch(setNeedMore(true));
  };

  /// return
  const mobileHeader = (
    <div className={styles.moibleHeaderContainer}>
      {needMore && <NeedHelpMpdal />}
      <div className={styles.titleAndNeedContainer}>
        <h1 className={styles.headerTitle}>How's the weather?</h1>
        <TransparentButton
          className={styles.helpButton}
          onClick={needMoreHandler}
        >
          Need More?
        </TransparentButton>
      </div>
      <div className={styles.searchBox}>
        <SearchBox />
      </div>
    </div>
  );

  if (width < 800) {
    return mobileHeader;
  }

  return (
    <div className={styles.headerContainer}>
      {needMore && <NeedHelpMpdal />}
      <h1 className={styles.headerTitle}>How's the weather?</h1>
      <SearchBox className={styles.searchBox} />
      <TransparentButton
        className={styles.helpButton}
        onClick={needMoreHandler}
      >
        Need More?
      </TransparentButton>
    </div>
  );
};

export default Header;
