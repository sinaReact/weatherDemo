import styles from "./TransparentButton.module.scss";

const TransparentButton = (props) => {
  //// props
  const { children, color = "rgb(26,202,177)", className, onClick } = props;

  /// return
  return (
    <button
      className={`${styles.buttonContainer} ${className}`}
      style={{ border: `4px solid ${color}`, color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
