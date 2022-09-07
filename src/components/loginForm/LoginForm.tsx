import React, { useState } from 'react';
import { Credentials } from '../../@types';
import Button, { ButtonType } from '../button/Button';
import LabeledInput, { InputType } from '../labeledInput/LabeledInput';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  onLogin: ({ username, password }: Credentials) => void;
  errorMessage?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, errorMessage }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin({ username: userName, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.header}>User Login</h3>
      <LabeledInput
        id="userName"
        label="Username"
        type={InputType.TEXT}
        value={userName}
        onChange={(value) => setUserName(value)}
        isRequired
      />
      <LabeledInput
        id="password"
        label="Password"
        type={InputType.PASSSWORD}
        value={password}
        onChange={(value) => setPassword(value)}
        isRequired
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
      <div className={styles.submitButton}>
        <Button type={ButtonType.SUBMIT} text="Log In" fullWidth />
      </div>
    </form>
  );
};

export default LoginForm;
