import React from 'react';
import styles from './LabeledInput.module.scss';

export interface LabeledInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputType;
  placeholder?: string;
  isRequired?: boolean;
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  type = InputType.TEXT,
  placeholder,
  value,
  onChange,
  isRequired = false,
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
        required={isRequired}
      />
    </div>
  );
};

export default LabeledInput;
