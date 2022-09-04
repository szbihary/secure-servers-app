import React from 'react';
import styles from './LabeledInput.module.scss';

export interface LabeledInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  placeholder?: string;
}

export enum InputType {
  TEXT = 'text',
  PASSSWORD = 'password',
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  type = InputType.TEXT,
  placeholder,
  value,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default LabeledInput;
