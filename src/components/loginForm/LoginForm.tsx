import React, { useState } from 'react';
import Button, { ButtonType } from '../button/Button';
import LabeledInput, { InputType } from '../labeledInput/LabeledInput';
import styles from './LoginForm.module.scss';

const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clicked');
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
      />
      <LabeledInput
        id="password"
        label="Password"
        type={InputType.PASSSWORD}
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <div className={styles.submitButton}>
        <Button type={ButtonType.SUBMIT} text="Log In" fullWidth />
      </div>
    </form>
  );
};

export default LoginForm;
