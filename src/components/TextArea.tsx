import styles from "../styles/components/TextArea.module.scss";
import React from "react";

type TextAreaProps = {
  value: string
  handleChange: (value: string) => void;
};

// eslint-disable-next-line react/display-name
export const TextArea: React.FC<TextAreaProps> = React.memo(({ value, handleChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      required
      maxLength={50}
      name="textarea"
      placeholder="ポジティブなことを書こう！"
      className={styles.textarea}
    />
  );
});
