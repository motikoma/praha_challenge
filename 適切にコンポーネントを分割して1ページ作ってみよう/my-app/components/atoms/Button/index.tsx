import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  color: "red" | "blue" | "green";
  size: "small" | "medium" | "large";
  disabled: boolean;
  onClick: () => void;
};

export const Button = (props: Props) => {
  const { children, color, size, disabled, onClick } = props;

  const classNames = `${styles[color]} ${styles[size]} ${
    disabled ? styles.disabled : ""
  }`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
