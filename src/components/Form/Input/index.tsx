import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  labelText: string;
}

const Input = ({ type, placeholder, labelText, ...rest }: InputProps) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor="">{labelText}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
