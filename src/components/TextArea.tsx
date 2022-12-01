import styles from "../styles/components/TextArea.module.scss";

type TextAreaProps = {
  value: string
  handleChange: (value: string) => void;
};

export const TextArea: React.FC<TextAreaProps> = ({ value, handleChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      required
      maxLength={46}
      name="textarea"
      placeholder="ポジティブなことを書こう！"
      className={styles.textarea}
    />
  );
};
