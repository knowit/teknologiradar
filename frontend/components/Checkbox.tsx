import { HTMLProps } from "react";
import styles from "./Checkbox.module.css";

interface Props extends HTMLProps<HTMLInputElement> {
  id: string;
  checked: boolean;
  label: string;
}
const Checkbox = ({ id, checked, label, onChange }: Props) => {
  return (
    <div>
      <input
        className={styles.input}
        id={id}
        key={id}
        type="checkbox"
        name={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
