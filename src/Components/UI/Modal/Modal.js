import styles from "./Modal.module.scss";

const Modal = (props) => {
  /// props
  const { children, className } = props;

  /// return
  return <div className={`${styles.modal} ${className}`}>{children}</div>;
};

export default Modal;
