import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  kind?: ButtonKind;
  onClick?: () => void;
  fullWidth?: boolean;
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum ButtonKind {
  PRIMARY = 'primary',
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = ButtonType.BUTTON,
  kind = ButtonKind.PRIMARY,
  onClick,
  fullWidth,
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.primary]: kind === ButtonKind.PRIMARY,
        [styles.fullWidth]: fullWidth,
      })}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
