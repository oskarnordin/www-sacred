'use client';

import styles from '@components/Button.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a'; // <-- polymorphic
  theme?: 'PRIMARY' | 'SECONDARY';
  isDisabled?: boolean;
  href?: string; // needed if it's an <a>
  target?: React.HTMLAttributeAnchorTarget; // e.g. "_blank"
  rel?: string; // e.g. "noopener noreferrer"
  children?: React.ReactNode;
}

export default function Button({
  as = 'button',
  theme = 'PRIMARY',
  isDisabled,
  children,
  href,
  target,
  rel,
  ...rest
}: ButtonProps) {
  let classNames = Utilities.classNames(styles.root, styles.primary);

  if (theme === 'SECONDARY') {
    classNames = Utilities.classNames(styles.root, styles.secondary);
  }

  if (isDisabled) {
    classNames = Utilities.classNames(styles.root, styles.disabled);
    return <div className={classNames}>{children}</div>;
  }

  if (href) {
    return (
      <a className={classNames} href={href} target={target} rel={rel} {...rest}>
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
