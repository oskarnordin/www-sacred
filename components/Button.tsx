'use client';

import styles from '@components/Button.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a'; // <-- polymorphic
  theme?: 'PRIMARY' | 'SECONDARY';
  isDisabled?: boolean;
  href?: string; // needed if it's an <a>
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  as = 'button',
  theme = 'PRIMARY',
  isDisabled,
  children,
  href,
  ...rest
}) => {
  let classNames = Utilities.classNames(styles.root, styles.primary);

  if (theme === 'SECONDARY') {
    classNames = Utilities.classNames(styles.root, styles.secondary);
  }

  if (isDisabled) {
    classNames = Utilities.classNames(styles.root, styles.disabled);
    return <div className={classNames}>{children}</div>;
  }

  if (as === 'a') {
    return (
      <a className={classNames} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
