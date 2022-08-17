import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonSendMessage = ({ text, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};

export default ButtonSendMessage;
